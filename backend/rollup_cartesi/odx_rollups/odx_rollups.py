# Copyright 2022 Cartesi Pte. Ltd.
#
# SPDX-License-Identifier: Apache-2.0
# Licensed under the Apache License, Version 2.0 (the "License"); you may not use
# this file except in compliance with the License. You may obtain a copy of the
# License at http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software distributed
# under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
# CONDITIONS OF ANY KIND, either express or implied. See the License for the
# specific language governing permissions and limitations under the License.

import sqlite3
from os import environ
import traceback
import logging
import requests
import json


logging.basicConfig(level="INFO")
logger = logging.getLogger(__name__)

rollup_server = environ["ROLLUP_HTTP_SERVER_URL"]
logger.info(f"HTTP rollup_server url is {rollup_server}")


def hex2str(hex):
    """
    Decodes a hex string into a regular string
    """
    return bytes.fromhex(hex[2:]).decode("utf-8")


def str2hex(str):
    """
    Encodes a string as a hex string
    """
    return "0x" + str.encode("utf-8").hex()


def init_conn():
    conn = sqlite3.connect('./orderbook.db')
    conn.row_factory = dict_factory
    return conn


def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d


def insert_data(query, data):
    conn = init_conn()

    try:
        with conn:
            cur = conn.cursor()
            cur.execute(query, data)
            return {'message': 'success', 'id': cur.lastrowid}
    except Exception as e:
        result = {'error': "EXCEPTION: " + e.__str__()}
        print("NOTICE EXCEPTION" + e.__str__())
        return result


def select_data(query, data):
    conn = init_conn()

    try:
        with conn:
            cur = conn.cursor()
            result = cur.execute(query, data)
            return result.fetchall()
    except Exception as e:
        result = {'error': "EXCEPTION: " + e.__str__()}
        print("NOTICE EXCEPTION" + e.__str__())
        return result


def create_base_tables():
    conn = sqlite3.connect('orderbook.db')
    cur = conn.cursor()

    sql_query = "SELECT name FROM sqlite_master WHERE type='table';"
    result = cur.execute(sql_query)
    tables = result.fetchall()

    if len(tables) == 0:
        print("Metadata does not exist")

        # Table campaigns
        query_orderbook_table = "CREATE TABLE orderbook (" \
            "id INTEGER PRIMARY KEY AUTOINCREMENT," \
            "order_id TEXT NOT NULL," \
            "receiver TEXT NOT NULL," \
            "tokenIn TEXT NOT NULL," \
            "tokenOut TEXT NOT NULL," \
            "tokenInAmount INTEGER NOT NULL," \
            "price INTEGER NOT NULL" \
            ");"

        cur.execute(query_orderbook_table)

        # Add more table creation queries here if needed

        conn.commit()
        conn.close()

    else:
        print("Metadata already exists")


def create_order(payload):
    # Decoding and printing the payload
    payload = hex2str(data["payload"])
    logger.info(f"Received payload: {payload}\n")

    payload = json.loads(payload)

    order_id = payload['order_id']
    receiver = payload['receiver']
    tokenIn = payload['tokenIn']
    tokenOut = payload['tokenOut']
    tokenInAmount = payload['tokenInAmount']
    price = payload['price']

    # Create the orderbook table if it doesn't exist
    create_base_tables()

    query = 'INSERT INTO orderbook (order_id, receiver, tokenIn, tokenOut, tokenInAmount, price) ' \
        'values (?, ?, ?, ?, ?)'
    insert_data(query, (order_id, receiver, tokenIn,
                tokenOut, tokenInAmount, price))

    get_matching_order(order_id, receiver)
    return {'message': 'success'}

# get the order that matches the order hash

# Due to a lack of the time it was not possible to implement the logic to match the orders
# But you'll have first need to change the data type of the orders
# and then make it as a json
# and then compare the orders to find the matching order


def get_matching_order(order_id, receiver):

    query = 'SELECT * FROM orderbook WHERE order_id != ?'
    main_orders = select_data(query, (order_id, ))
    logger.info(
        f"There are all orders with the specified order_id: {main_orders}\n")

    query = 'SELECT * FROM orderbook WHERE order_id = ? AND receiver = ?'
    main_order = select_data(query, (order_id, receiver))

    if len(main_orders) == 0:
        return {'error': 'Campaign does not exist'}
    else:
        matching_order = None
        for other_order in main_orders:
            if main_order['tokenInAmount'] * other_order['tokenInAmount'] == main_order['price']:
                matching_order = other_order
                break
        return {'message': 'order to trigger', 'matching_order': matching_order, 'order': main_order}


def handle_advance(data):

    logger.info(f"Received advance request data {data}")

    status = "accept"
    try:
        logger.info("Adding notice")
        response = requests.post(
            rollup_server + "/notice", json={"payload": data["payload"]})
        logger.info(
            f"Received notice status {response.status_code} body {response.content}")
        create_order(data["payload"])

    except Exception as e:
        status = "reject"
        msg = f"Error processing data {data}\n{traceback.format_exc()}"
        logger.error(msg)
        response = requests.post(
            rollup_server + "/report", json={"payload": str2hex(msg)})
        logger.info(
            f"Received report status {response.status_code} body {response.content}")

    return status


def handle_inspect(data):
    logger.info(f"Received inspect request data {data}")
    logger.info("Adding report")
    response = requests.post(rollup_server + "/report",
                             json={"payload": data["payload"]})
    logger.info(f"Received report status {response.status_code}")
    return "accept"


handlers = {
    "advance_state": handle_advance,
    "inspect_state": handle_inspect,
}

finish = {"status": "accept"}

while True:
    logger.info("Sending finish")
    response = requests.post(rollup_server + "/finish", json=finish)
    logger.info(f"Received finish status {response.status_code}")
    if response.status_code == 202:
        logger.info("No pending rollup request, trying again")
    else:
        rollup_request = response.json()
        data = rollup_request["data"]

        handler = handlers[rollup_request["request_type"]]
        finish["status"] = handler(rollup_request["data"])

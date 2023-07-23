const ODX = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .global {
      border-radius: 20px;
      border: 20px solid #565568;
      background: #262637;

      .header {
        display: flex;
        align-items: center;
        height: 70px;
        border-bottom: 1px solid #565568;

        .logo {
          margin: 0px 20px 0px 20px;

          .image {
            width: 85px;
          }
        }
        .blank {
          flex-grow: 1;
        }
        .connect-btn {
          margin: 0px 20px 0px 20px;
          padding: 5px 20px 5px 20px;
          border-radius: 20px;
          border: none;
          background: #565568;
          font-size: 16px;
          font-weight: 600;
          color: white;
          cursor: pointer;
        }
        .connect-btn:hover {
          background: #151522;
          color: #6B6982;
        }
      }

    }
    .content {
      display: flex;

      .order-box {
        width: 350px;
        border-right: 1px solid #565568;
        background: #1A1A27;

        .pair {
          display: flex;
          align-items: center;
          height: 40px;
          border-bottom: 1px solid #565568;

          .text {
            margin: 0px 0px 0px 10px;
            color: white;
          }
          .image {
            width: 20px;
            margin: 0px 0px 0px 10px;
          }
        }
        .order-type {
          display: flex;
          align-items: center;
          border-bottom: 1px solid #565568;

          .type-btn {
            width: 33%;
            padding: 10px 0px 10px 0px;
            cursor: pointer;
            color: #6B6982;
            text-align: center;
          }
          .type-btn:hover {
            color: white;
          }
          .type-btn-selected {
            color: white;
            background: #151522;
          }
          .market {
            border-right: 1px solid #565568;
          }
          .limit {
            border-right: 1px solid #565568;
          }
          .stop {

          }
        }
        .action-box {
          display: flex;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid #565568;

          .action-btn {
            width: 50%;
            height: 50px;
            padding: 15px 0px 15px 0px;
            border-radius: 4px;
            font-size: 16px;
            font-weight: 600;
            color: #6B6982;
            text-align: center;
            cursor: pointer;
          }
          .action-btn:hover {
            color: white;
          }
          .sell-btn-selected {
            background: #FF5353;
            color: white;
          }
          .buy-btn-selected {
            background: #16B57F;
            color: white;
          }
        }
        .amount-box {
          padding: 20px;

          .amount-header {
            display: flex;
            align-items: center;
            margin: 0px 0px 10px 0px;

            .label {
              font-size: 16px;
              font-weight: 600;
              color: white;
            }
            .symbol {
              border-radius: 4px;
              margin: 0px 0px 0px 8px;
              padding: 2px 5px 2px 5px;
              background: #89899C;
              font-size: 10px;
              font-weight: 600;
              text-align: center;
              color: white;
            }
          }
          .amount-content {
            display: flex;
            align-items: center;
            padding: 10px;
            border-radius: 4px;
            background: #232334;

            .input {
              width: 150px;
              margin: 0px 10px 0px 0px;
              border-radius: 4px;
              background: #232334;
              border: none;
              font-weight: 600;
              color: white;
            }
            .input:hover {
              outline: none !important;
              border: none;
            }
            .input:focus {
              outline: none !important;
              border: none;
            }
            .blank {
              flex-grow: 1;
            }
            .percent-btn {
              margin: 0px 10px 0px 0px;
              color: #6B6982;
              cursor: pointer;
            }
            .percent-btn:hover {
              color: white;
            }
            .max-btn {
              margin: 0px 10px 0px 0px;
              color: #6B6982;
              cursor: pointer;
            }
            .max-btn:hover {
              color: white;
            }
          }
        }
        .price-box {
          padding: 20px;

          .price-header {
            display: flex;
            align-items: center;
            margin: 0px 0px 10px 0px;

            .label {
              font-size: 16px;
              font-weight: 600;
              color: white;
            }
            .symbol {
              border-radius: 4px;
              margin: 0px 0px 0px 8px;
              padding: 2px 5px 2px 5px;
              background: #89899C;
              font-size: 10px;
              font-weight: 600;
              text-align: center;
              color: white;
            }
          }
          .price-content {
            display: flex;
            align-items: center;
            padding: 10px;
            border-radius: 4px;
            background: #232334;
            border-bottom: 1px solid #565568;

            .input {
              width: 150px;
              margin: 0px 10px 0px 0px;
              border-radius: 4px;
              background: #232334;
              border: none;
              font-weight: 600;
              color: white;
            }
            .input:hover {
              outline: none !important;
              border: none;
            }
            .input:focus {
              outline: none !important;
              border: none;
            }
          }
        }
        .confirm-box {
          display: flex;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid #565568;

          .confirm-btn {
            width: 100%;
            height: 50px;
            padding: 15px 0px 15px 0px;
            background: #16B57F;
            border-radius: 4px;
            font-size: 16px;
            font-weight: 600;
            color: white;
            text-align: center;
            cursor: pointer;
          }
        }
      }
      .chart {

        .image {

        }
      }
    }
`;

/*
 Contracts
 */

const contract = {
  address: "0x37F46adf5B118BbF3361Ffea6dfe2a3Ce2eD7E4F",
  abi: fetch(
    `https://raw.githubusercontent.com/ETH-Global-Paris-2023/ODX/main/backend/abis/ODX_abi.json`
  ).body,
};

/*
 State
 */
State.init({
  imports: {},
  chainId: undefined,
  connected: false,
  address: undefined,
  orderType: "market",
  orderAction: "buy",
  amount: "12",
  price: "13",
});

/*
 Dom Events
 */

const onAmountChange = ({ target }) => {
  State.update({
    amount: target.value,
  });
};
const onMaxClick = (e) => {
  State.update({
    amount: "1000",
  });
};
const onPriceChange = ({ target }) => {
  State.update({
    price: target.value,
  });
};
const onOrderTypeMarket = (e) => {
  State.update({
    orderType: "market",
  });
};
const onOrderTypeLimit = (e) => {
  State.update({
    orderType: "limit",
  });
};
const onOrderActionSell = (e) => {
  State.update({
    orderAction: "sell",
  });
};
const onOrderActionBuy = (e) => {
  State.update({
    orderAction: "buy",
  });
};
const onConfirm = () => {
  if (!state.address) {
    return;
  }
  const tokenDecimals = 18;
  const provider = Ethers.provider();
  const signer = provider.getSigner();
  console.log("contract.address", contract.address);
  console.log("contract.abi", contract.abi);
  console.log("provider", provider);
  console.log("signer", signer);

  const erc20 = new ethers.Contract(contract.address, contract.abi, signer);
  let amount = ethers.utils
    .parseUnits(state.amount, tokenDecimals)
    .toHexString();

  const USDC = "0xda9d4f9b69ac6C22e444eD9aF0CfC043b7a7f53f";
  const WBTC = "0xf864F011C5A97fD8Da79baEd78ba77b47112935a";

  erc20
    .pushOrderLiquidity(
      state.address,
      USDC,
      WBTC,
      ethers.utils.parseUnits(state.amount, tokenDecimals),
      ethers.utils.parseUnits(state.price, tokenDecimals)
    )
    .then((transactionHash) => {
      console.log("transactionHash is " + transactionHash);
    });
};

/*
 Methods
 */

const getTypeStyles = (type) => {
  let styles = `type-btn ${type}`;
  if (state.orderType == type) {
    styles += ` type-btn-selected`;
  }
  return styles;
};

const getActionStyles = (action) => {
  let styles = `action-btn`;
  if (state.orderAction == action) {
    styles += ` ${action}-btn-selected`;
  }
  return styles;
};

/*
 Components
 */

const priceComponent =
  state.orderType == "limit" ? (
    <div class="price-box">
      <div class="price-header">
        <div class="label">Price</div>
        <div class="symbol">ETH</div>
      </div>
      <div class="price-content">
        <input class="input" />
      </div>
    </div>
  ) : null;

/*
 Main
 */

if (Ethers.provider()) {
  const signer = Ethers.provider().getSigner();

  signer.getAddress().then((address) => {
    State.update({
      address,
      connected: true,
    });

    console.log("address", address);

    if (state.balance === undefined) {
      Ethers.provider()
        .getBalance(address)
        .then((balance) => {
          State.update({
            balance: balance.toString(),
          });
        });
    }
  });

  Ethers.provider()
    .getNetwork()
    .then((chainIdData) => {
      if (chainIdData?.chainId) {
        State.update({ chainId: chainIdData.chainId });
      }
    });
}

/*
 Render
 */

return (
  <ODX>
    <div class="global">
      <div class="header">
        <div class="logo">
          <img class="image" src="https://i.imgur.com/srQIMqd.png" />
        </div>
        <div class="blank"></div>
        <Web3Connect className="connect-btn" connectLabel="Connect" />
      </div>
      <div class="content">
        <div class="order-box">
          <div class="pair">
            <img
              class="image"
              src="https://trade.dydx.exchange/currencies/eth.svg"
            />
            <div class="text">CTSI-ETH</div>
          </div>
          <div class="order-type">
            <div
              className={getTypeStyles("market")}
              onClick={onOrderTypeMarket}
            >
              Market
            </div>
            <div className={getTypeStyles("limit")} onClick={onOrderTypeLimit}>
              Limit
            </div>
            <div class="type-btn stop">Stop</div>
          </div>
          <div class="action-box">
            <div
              className={getActionStyles("sell")}
              onClick={onOrderActionSell}
            >
              Sell
            </div>
            <div className={getActionStyles("buy")} onClick={onOrderActionBuy}>
              Buy
            </div>
          </div>
          <div class="amount-box">
            <div class="amount-header">
              <div class="label">Amount</div>
              <div class="symbol">CTSI</div>
            </div>
            <div class="amount-content">
              <input
                class="input"
                onChange={onAmountChange}
                value={state.amount}
              />
              <div class="blank"></div>
              <div class="percent-btn">%</div>
              <div class="max-btn" onClick={onMaxClick}>
                MAX
              </div>
            </div>
          </div>
          {priceComponent}
          <div class="confirm-box">
            <div class="confirm-btn" onClick={(e) => onConfirm()}>
              Confirm
            </div>
          </div>
        </div>
        <div class="chart">
          <img class="image" src="https://i.imgur.com/xryEwH1.png" />
        </div>
      </div>
    </div>
  </ODX>
);

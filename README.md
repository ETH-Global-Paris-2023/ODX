# ODX (Orderbook Decentralized Exchange) 🧮

ODX (Orderbook Decentralized Exchange) is a decentralized exchange (DEX) that originated from a hackathon event. Powered by Cartesi's rollup technology, ODX executes order matching on-chain, creating a fully decentralized orderbook operating on every EVM-compatible chain.

## Introduction

### Limit Order

ODX's main application is its on-chain orderbook and matching engine. Users can deposit their desired ERC-20 Token amount through the ODX front-end to place on-chain orders. These orders are first recorded in the ODX Cartesi Rollup's database list with unique identifiers (orderID). The ODX Back-end scans incoming orders, searching for potential matches. When matches are found, the orders are grouped together in a list of matched orders. These matched orders are then executed by the ODX Community Nodes, earning rewards from the fees paid by users in the process.

### Market Order


### Folder Structure

The application is divided into different folders, each serving a specific purpose:

1. **./backend/rollup_cartesi/odx_rollups:**
This folder contains a custom rollup that fetches orders from the blockchain and stores them locally. The rollup ensures that any transaction executor can access the correct orders and execute them at the right time. It is essential to note that this rollup is specifically designed for order-limit functionality and not for market orders.

2. **./bots_service:**
In this folder, users can find the bots service, enabling anyone to run these bots and execute orders. Through this service, users may also have the opportunity to earn rewards.

3. **./apis:**
This folder triggers the 1inch Fusion SDK for order market functionality. A recommended practice is to create a frontend component that integrates the SDK initially.

### Order Execution

For order execution, ODX provides two distinct methods:

1. **Order Limit Execution:**
Users can store their order limit on the blockchain through the custom rollup in the ./backend/rollup_cartesi/odx_rollups folder. The rollup ensures that the correct order is fetched and executed by any transaction executor at the right time.

2. **Order Market Execution:**
To execute order market functionality, the 1inch Fusion SDK is utilized. The SDK is triggered through the ./apis folder. For better integration, a frontend component can be developed to streamline the process.

### Usage

To use ODX, follow these steps:

1. Clone this repository to your local machine.
2. Access the appropriate folders based on your desired functionality (order limit or market).
3. Follow the instructions within each folder to execute and interact with the relevant components.

### Disclaimer
ODX is an ongoing project, and the code provided in this repository may undergo updates and improvements over time. It is essential to ensure you are using the latest version for optimal performance and security.

### Contributing
If you wish to contribute to the development of ODX, feel free to fork this repository and submit pull requests with your proposed changes. We appreciate community involvement in making ODX a better and more robust decentralized application.

### License
ODX is licensed under **MIT License**. Feel free to use, modify, and distribute the code within the guidelines of the license.

Happy trading with ODX!

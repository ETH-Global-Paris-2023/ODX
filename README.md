# ODX (Orderbook Decentralized Exchange) 🧮

ODX (Orderbook Decentralized Exchange) is a decentralized exchange (DEX) that originated from a hackathon event. Powered by Cartesi's rollup technology, ODX executes order matching on-chain, creating a fully decentralized orderbook operating on every EVM-compatible chain.

## Introduction

### Limit Order

ODX's main application is its on-chain orderbook and matching engine. Users can deposit their desired ERC-20 Token amount through the ODX front-end to place on-chain orders. These orders are first recorded in the ODX Cartesi Rollup's database list with unique identifiers (orderID). The ODX Back-end scans incoming orders, searching for potential matches. When matches are found, the orders are grouped together in a list of matched orders. These matched orders are then executed by the ODX Community Nodes, earning rewards from the fees paid by users in the process.

### Market Order

ODX's also allows for market order execution thourgh the 1inch Fusion Swap Solution integrated into our dApp. Users are required to deposit funds before placing the order. When an order is placed, it is direclty executed and the best prices are found thanks to 1inch Fusion. 

## Folder Structure

The application is divided into different folders, each serving a specific purpose:

1. **./backend/rollup_cartesi/odx_rollups:**
This folder contains a custom rollup that fetches orders from the blockchain and stores them locally. The rollup ensures that any transaction executor can access the correct orders and execute them at the right time. It is essential to note that this rollup is specifically designed for order-limit functionality and not for market orders.

2. **./bots_service:**
In this folder, users can find the bots service, enabling anyone to run these bots and execute orders. Through this service, users may also have the opportunity to earn rewards.

3. **./apis:**
This folder triggers the 1inch Fusion SDK for order market functionality. A recommended practice is to create a frontend component that integrates the SDK initially.

## Order Execution

For order execution, ODX provides two distinct methods:

1. **Order Limit Execution:**
Users can store their order limit on the blockchain through the custom rollup in the ./backend/rollup_cartesi/odx_rollups folder. The rollup ensures that the correct order is fetched and executed by any transaction executor at the right time.

2. **Order Market Execution:**
To execute order market functionality, the 1inch Fusion SDK is utilized. The SDK is triggered through the ./apis folder. For better integration, a frontend component can be developed to streamline the process.

## ODX Whitepaper

You can access our whitepaper directly using this link: INSERT HERE

## Usage

To use ODX, follow these steps:

1. Clone this repository to your local machine.
2. Access the appropriate folders based on your desired functionality (order limit or market).
3. Follow the instructions within each folder to execute and interact with the relevant components.

# Technology / Solutions used

ODX has been built during the ETH Global Paris Hackathon and the team had the opportunity to combine many innovative solutions to create ODX.

- Cartesi, an application specific rollup on linux runtime.
- Quicknode, particulary leveraging their RPC.
- 1inch, integrating their Fusion swap solution.
- EVM Neon
- Gnosis
- Near, leveraging their Blockchain Operating System to deploy our Front-end for a full decentralized dApp interaction user experience.
- Mantle
- Polygon
- Zetachain
- Celo
- Walletconnect, using their web3modal solution for allowing users to connect their wallets and interact with our dApp.

### Polygon zkEVM

To deploy on the Polygon : 
```
forge script script/ODXScript.s.sol:ODXScript --broadcast --rpc-url 
>${RPC_URL_POLYGON_ZKTEST} --verifier-url 
>${VERIFIER_URL_POLYGON_ZKTEST} --etherscan-api-key 
>${POLYGON_ZK_TESTNET_ETHERSCAN_API_KEY} --verify --legacy
```

The quicknode RPC used on this network : https://shy-distinguished-meadow.zkevm-testnet.discover.quiknode.pro/api_key

### Celo

The contract on Celo was deployed succesfully via foundry thanks to the following command :
```
forge script script/ODXScript.s.sol:ODXScript --broadcast --rpc-url 
${CELO_ALFA_TESTNET_RPC_URL} --verifier-url 
${VERIFIER_URL_CELO_ALFA_TESTNET} --etherscan-api-key 
${ETHERSCAN_API_KEY} --verify --legacy
```

But we were unable to verify the contract, here is what we were shown :
```
Start verification for (1) contracts
Start verifying contract `0xa2ee5d4dbc5e4a717caccccbf33eec2c2b943f96` deployed on celo-alfajores

Submitting verification for [src/ODX.sol:ODX] "0xA2eE5D4dbc5e4A717cAccccBF33EEC2c2B943F96".
Encountered an error verifying this contract:
Response: `NOTOK`
Details: `Error!`
```


## ODX addresses

### Our smart contracts
| Contract  | Contract address |
| --------- | --------------- |
| ODX Polygon zkEVM | [0x1ebfbbd3b97ebdbf946d1781ee559a986098ec98](https://testnet-zkevm.polygonscan.com/address/0xc9217932acfFeb6019313ff7126365d8aE03AF04) |
| ODX Celo | [0xa2ee5d4dbc5e4a717caccccbf33eec2c2b943f96](https://alfajores.celoscan.io/address/0xa2ee5d4dbc5e4a717caccccbf33eec2c2b943f96) |
| ODX Gnosis (Mainnet) | [0xc9217932acffeb6019313ff7126365d8ae03af04](https://gnosisscan.io/address/0xc9217932acffeb6019313ff7126365d8ae03af04) |

- Polygon contract was verified on Foundry
- Celo contract was verified on Sourcify (and not on the explorer): https://repo.sourcify.dev/contracts/full_match/44787/0xc9217932acfFeb6019313ff7126365d8aE03AF04/
- Gnosis contract has been verified

## Disclaimer
ODX is an ongoing project, and the code provided in this repository may undergo updates and improvements over time. It is essential to ensure you are using the latest version for optimal performance and security.

## Contributing
If you wish to contribute to the development of ODX, feel free to fork this repository and submit pull requests with your proposed changes. We appreciate community involvement in making ODX a better and more robust decentralized application.

## License
ODX is licensed under **MIT License**. Feel free to use, modify, and distribute the code within the guidelines of the license.

Happy trading with ODX!

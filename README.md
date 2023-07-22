# ODX (Orderbook Decentralized Exchange)

ODX (Orderbook Decentralized Exchange) is a decentralized exchange (DEX) that originated from a hackathon event. Powered by Cartesi's rollup technology, ODX executes order matching on-chain, creating a fully decentralized orderbook. This paper explores ODX's hackathon roots and highlights the key benefits of Cartesi's rollup for decentralized trading.


The application is separated in different folders that have specific purpose: 
To store orders : on the ./backend/rollup_cartesi/odx_rollups folder you can see a custom rollup that would get the orders from the blockchain and it's stored locally with this code any transaction executor can get the right orders and execute it at the right time. 
Here we need to specify that it's for only order limit and not market 

To execure orders: on the ./bots_service that's here that any person can run those bots and execute the order, through that it may be possible for them to get money too

The part that i've told about is onlhy for order-limit for order market we'll use 1inch Fusion sdk .
on the folder ./apis that would be here that the sdk would be trigger, a better practice would be to create a component for the frontend so the sdk is initially integrate. 
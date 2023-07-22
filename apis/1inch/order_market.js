const makerPrivateKey = process.env.ODX_MAKER_PRIVATE_KEY
const makerAddress = process.env.ODX_MAKER_ADDRESS
const fromTokenAddress = process.env.ODX_FROM_TOKEN_ADDRESS
const toTokenAddress = process.env.ODX_TO_TOKEN_ADDRESS
const amount = process.env.ODX_SWAP_AMOUNT
const nodeUrl = process.env.ODX_NODE_URL

const {
    FusionSDK,
    NetworkEnum,
    PrivateKeyProviderConnector
} = require('@1inch/fusion-sdk')
const {
    Web3
} = require('web3')

const chainProvider = new PrivateKeyProviderConnector(
    makerPrivateKey,
    new Web3(nodeUrl)
)

const sdk = new FusionSDK({
    url: 'https://fusion.1inch.io',
    network: NetworkEnum.ETHEREUM,
    chainProvider
})

sdk.placeOrder({
    fromTokenAddress,
    toTokenAddress,
    amount,
    makerAddress
})
.then(console.log)

const Web3 = require('web3');
const ContractABI = require('./ContractABI.json');
const rpcUrl = 'https://YOUR_QUICKNODE_RPC_URL';

const web3 = new Web3(rpcUrl);

// Adresse de votre compte Ethereum avec des fonds pour effectuer des transactions
const senderAddress = 'YOUR_SENDER_ADDRESS';
const privateKey = 'YOUR_PRIVATE_KEY'; // La clé privée associée au compte senderAddress

async function executeFunction(signature, params) {
    try {
        // Remplacez "ContractABI" par le JSON ABI de votre contrat
        const contractABI = ContractABI;
        const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Adresse du contrat à appeler

        const contract = new web3.eth.Contract(contractABI, contractAddress);
        const data = contract.methods[signature](...params).encodeABI();

        const gasPrice = await web3.eth.getGasPrice();
        const nonce = await web3.eth.getTransactionCount(senderAddress, 'pending');

        const transactionObject = {
            from: senderAddress,
            to: contractAddress,
            gasPrice: web3.utils.toHex(gasPrice),
            data: data,
            nonce: web3.utils.toHex(nonce),
        };

        const signedTransaction = await web3.eth.accounts.signTransaction(
            transactionObject,
            privateKey
        );

        const transactionReceipt = await web3.eth.sendSignedTransaction(
            signedTransaction.rawTransaction
        );

        console.log('Transaction receipt:', transactionReceipt);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Exemple d'utilisation
const functionSignature = 'pushOrderLiquidity(address, address, address, uint256, uint256)';
const functionParams = ['0x', '0x', '0x', '0', '0'];

executeFunction(functionSignature, functionParams);
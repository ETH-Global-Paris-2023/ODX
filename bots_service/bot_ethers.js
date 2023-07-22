const { ethers } = require('ethers');

// Remplacez l'URL par le point de terminaison QuickNode RPC approprié
const rpcUrl = 'https://YOUR_QUICKNODE_RPC_URL';

const provider = new ethers.providers.JsonRpcProvider(rpcUrl);

// Adresse de votre compte Ethereum avec des fonds pour effectuer des transactions
const senderAddress = 'YOUR_SENDER_ADDRESS';
const privateKey = 'YOUR_PRIVATE_KEY'; // La clé privée associée au compte senderAddress

async function executeFunction(contractABI, contractAddress, signature, params) {
    try {
        const wallet = new ethers.Wallet(privateKey, provider);
        const contract = new ethers.Contract(contractAddress, contractABI, wallet);

        const transaction = await contract[signature](...params);
        const receipt = await transaction.wait();

        console.log('Transaction receipt:', receipt);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Exemple d'utilisation
const contractABI = [...]; // Remplacez par le JSON ABI de votre contrat
const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Adresse du contrat à appeler
const functionSignature = 'pushOrderLiquidity'; // Nom de la fonction Solidity à appeler
const functionParams = ['0x', '0x', '0x', '0', '0']; // Paramètres de la fonction

executeFunction(contractABI, contractAddress, functionSignature, functionParams);
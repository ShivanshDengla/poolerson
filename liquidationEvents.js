async function liquidationEvent(client, chainName) {
    const { ethers } = require("ethers");
    const { ADDRESS } = require("./src/constants/toucanAddress.js");
    const { ABI } = require("./src/constants/toucanAbi.js");
    const { sendMessageToDiscord } = require("./sendMessages.js");
    const { PROVIDERS } = require("./src/constants/providers.js")

    const optimismProvider = PROVIDERS[chainName];
    const liquidationPairFactoryAddress = ADDRESS[chainName].LIQUIDATIONPAIRFACTORY;
    const liquidationPairFactoryAbi = ABI.LIQUIDATIONPAIRFACTORY;
    
    const liquidationPairFactoryContract = new ethers.Contract(
        liquidationPairFactoryAddress,
        liquidationPairFactoryAbi,
        optimismProvider
    );

liquidationPairFactoryContract.on("*", async (eventName, event) => {
    console.log("Event:", eventName);
    console.log("Data:", event);

    const txHash = eventName.transactionHash;
    console.log("Transaction hash: ", eventName.transactionHash);
    const tokenIn = eventName.args[2];
    console.log("Token In: ", eventName.args[2]);
    const tokenOut = eventName.args[1];
    console.log("Token Out: ", eventName.args[1]);

    const etherscanLink = `https://optimistic.etherscan.io/tx/${txHash}`;
    console.log("Etherscan Link:", etherscanLink);

    const transaction = await optimismProvider.getTransaction(txHash);
    const sender = transaction.from;
    console.log("Sender:", sender);

    const tokenOutName = await getTokenName(tokenOut);

    sendMessageToDiscord(client, etherscanLink, sender, tokenOutName);
});

async function getTokenName(tokenAddress) {
    try {
        // Connect to an Ethereum node
        const provider = PROVIDERS[chainName];

        // Create a contract instance for the ERC20 token
        const abi = [
            {
                "constant": true,
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }
        ];

        const contract = new ethers.Contract(tokenAddress, abi, provider);

        // Call the name() function of the ERC20 token contract
        const name = await contract.name();

        return name;
    } catch (error) {
        console.error('Error getting token name:', error);
        return "Unknown Token";
    }
}

}

module.exports = liquidationEvent;

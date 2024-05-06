async function liquidationEvent(client) {
    const { ethers } = require("ethers");
    const { ADDRESS } = require("./src/constants/toucanAddress.js");
    const { ABI } = require("./src/constants/toucanAbi.js");
    const { sendMessageToDiscord } = require("./sendMessages.js");
    
    const optimismProvider = new ethers.providers.JsonRpcProvider("https://mainnet.optimism.io");
    const liquidationPairFactoryAddress = ADDRESS.OPTIMISM.LIQUIDATIONPAIRFACTORY;
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

    sendMessageToDiscord(client, txHash, etherscanLink, tokenIn, tokenOut, sender);
});
}

module.exports = liquidationEvent;

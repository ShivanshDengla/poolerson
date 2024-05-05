const { EmbedBuilder } = require("discord.js");
const { Emoji } = require("./src/constants/emoji.js");

async function sendMessageToDiscord(client, txHash, etherscanLink, tokenIn, tokenOut, sender) {
    try {
        const channelId = '1225048554708406282';
        const channel = await client.channels.fetch(channelId);
        const senderLink = `https://etherscan.io/address/${sender}`;
        const tokenOutName = await getTokenName(tokenOut);

        // Constructing the embed
        let liquidationEmbed = new EmbedBuilder()
            .setColor("#0099ff")
            .setTitle(Emoji("optimism") + " New Liquidation Pair")
            .setDescription(
                `${tokenOutName}\n` +
                `Created by: [${sender.slice(0, 6)}](${senderLink})\n` +
                `[Transaction ↗️](${etherscanLink})`
            );

        console.log("embed", liquidationEmbed);

        await channel.send({ embeds: [liquidationEmbed] });

        console.log("Embed sent to Discord successfully");
    } catch (error) {
        console.log("error generating liquidation embed", error);
    }
}

async function sendVaultToDiscord(client, txHash, name, etherscanLink, sender, address) {
    try {
        const channelId = '1225048554708406282';
        const channel = await client.channels.fetch(channelId);
        const senderLink = `https://etherscan.io/address/${sender}`;
        const pooltimeLink = `https://www.pooltime.app/vaults?chain=10&address=${address}`;

        // Constructing the embed
        let vaultEmbed = new EmbedBuilder()
            .setColor("#0099ff")
            .setTitle(Emoji("optimism") + " New Vault ")
            .setDescription(
                `${name}\n` +
                `Created by: [${sender.slice(0, 6)}](${senderLink})\n` +
                `[Transaction↗](${etherscanLink})\n` +
                `View on: [PoolTime](${pooltimeLink})`
            );

        console.log("embed", vaultEmbed);

        await channel.send({ embeds: [vaultEmbed] });

        console.log("Embed sent to Discord successfully");
    } catch (error) {
        console.log("error generating vault embed", error);
    }
}

async function getTokenName(tokenAddress) {
    try {
        // Connect to an Ethereum node
        const provider = PROVIDERS.SEPOLIA;

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

module.exports = { sendMessageToDiscord, sendVaultToDiscord };

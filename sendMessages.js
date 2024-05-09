const { EmbedBuilder } = require("discord.js");
const { Emoji } = require("./src/constants/emoji.js");
const { DISCORDADDRESS } = require("./src/constants/discordAddress.js");
const { PROVIDERS } = require("./src/constants/providers.js")
const { ethers } = require("ethers");


async function sendMessageToDiscord(client, etherscanLink, sender, tokenOutName) {
    try {
        const channelId = DISCORDADDRESS.POOLTIME;
        const channel = await client.channels.fetch(channelId);
        const senderLink = `https://etherscan.io/address/${sender}`;

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

async function sendVaultToDiscord(client, name, etherscanLink, sender, address) {
    try {
        const channelId = DISCORDADDRESS.POOLTIME;
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

module.exports = { sendMessageToDiscord, sendVaultToDiscord };

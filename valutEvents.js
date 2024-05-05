const { ethers } = require("ethers");
const { ADDRESS } = require("./src/constants/toucanAddress.js");
const { ABI } = require("./src/constants/toucanAbi.js");
const { sendVaultToDiscord } = require("./sendMessages.js");
const moment = require("moment");

const { Client, Collection, GatewayIntentBits, Partials } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildEmojisAndStickers, GatewayIntentBits.GuildIntegrations, GatewayIntentBits.GuildInvites, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMessageTyping, GatewayIntentBits.DirectMessages, GatewayIntentBits.DirectMessageReactions, GatewayIntentBits.DirectMessageTyping, GatewayIntentBits.MessageContent], shards: "auto", partials: [Partials.Message, Partials.Channel, Partials.GuildMember, Partials.Reaction, Partials.GuildScheduledEvent, Partials.User, Partials.ThreadMember]});


const optimismProvider = new ethers.providers.JsonRpcProvider("https://mainnet.optimism.io");
const newVaultAddress = ADDRESS.OPTIMISM.VAULTFACTORY;
const newVaultAbi = ABI.VAULTFACTORY;

const newVaultContract = new ethers.Contract(newVaultAddress, newVaultAbi, optimismProvider);

const log = x => { console.log(`[${moment().format("DD-MM-YYYY HH:mm:ss")}] ${x}`) };

client.on("ready", async () => {
    log(`${client.user.username} Aktif Edildi!`);
});

newVaultContract.on("*", async (vaultName) => {
    try {
        console.log("NewVaultCreated event received:");
        console.log("Vault Name:", vaultName);

        const txHash = vaultName.transactionHash;
        console.log("Transaction hash: ", vaultName.transactionHash);

        const name = vaultName.args[3];
        console.log("Vault Name: ", vaultName.args[3]);

        const etherscanLink = `https://optimistic.etherscan.io/tx/${txHash}`;
        console.log("Etherscan Link:", etherscanLink);

        const transaction = await optimismProvider.getTransaction(txHash);
        const sender = transaction.from;
        console.log("Created By:", sender);

        const address = vaultName.address;
        console.log("Address: ", vaultName.address);

        // Send message to Discord
        sendVaultToDiscord(client, txHash, name, etherscanLink, sender, address);
    } catch (error) {
        console.error("Error handling NewVaultCreated event:", error);
    }
});
const dotenv = require("dotenv");
dotenv.config();

let token = process.env.BOT_KEY;

client.login(token);

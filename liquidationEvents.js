const { Client, Collection, GatewayIntentBits, Partials } = require("discord.js");
const { ethers } = require("ethers");
const { ADDRESS } = require("./src/constants/toucanAddress.js");
const { ABI } = require("./src/constants/toucanAbi.js");
const { sendMessageToDiscord } = require("./sendMessages.js");
const moment = require("moment");

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildEmojisAndStickers, GatewayIntentBits.GuildIntegrations, GatewayIntentBits.GuildInvites, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMessageTyping, GatewayIntentBits.DirectMessages, GatewayIntentBits.DirectMessageReactions, GatewayIntentBits.DirectMessageTyping, GatewayIntentBits.MessageContent], shards: "auto", partials: [Partials.Message, Partials.Channel, Partials.GuildMember, Partials.Reaction, Partials.GuildScheduledEvent, Partials.User, Partials.ThreadMember]});

const optimismProvider = new ethers.providers.JsonRpcProvider("https://mainnet.optimism.io");
const liquidationPairFactoryAddress = ADDRESS.OPTIMISM.LIQUIDATIONPAIRFACTORY;
const liquidationPairFactoryAbi = ABI.LIQUIDATIONPAIRFACTORY;

const liquidationPairFactoryContract = new ethers.Contract(
    liquidationPairFactoryAddress,
    liquidationPairFactoryAbi,
    optimismProvider
);

const log = x => { console.log(`[${moment().format("DD-MM-YYYY HH:mm:ss")}] ${x}`) };

client.on("ready", async () => {
    log(`${client.user.username} Aktif Edildi!`);
});

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

const dotenv = require("dotenv");
dotenv.config();

let token = process.env.BOT_KEY;

client.login(token);

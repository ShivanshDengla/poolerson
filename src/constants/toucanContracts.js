const ethers = require("ethers");
const { ABI } = require("./toucanAbi.js");
const { ADDRESS } = require("./toucanAddress.js");
const { PROVIDERS } = require("./providers.js");

let CONFIG = {}
CONFIG.CHAINNAME = "OPTIMISM"

const CONTRACTS = {
/* GASORACLE: {
    [CONFIG.CHAINNAME]: new ethers.Contract(
      ADDRESS[CONFIG.CHAINNAME].GASORACLE,
      ABI.GASORACLE,
      PROVIDERS[CONFIG.CHAINNAME]
    ),
  },
*/
  CLAIMER: {
    [CONFIG.CHAINNAME]: new ethers.Contract(
      ADDRESS[CONFIG.CHAINNAME].CLAIMER,
      ABI.CLAIMER,
      PROVIDERS[CONFIG.CHAINNAME]
    ),
  },
  VAULTS: {
    [CONFIG.CHAINNAME]: ADDRESS[CONFIG.CHAINNAME].VAULTS.map((vault) => ({
  /*    LIQUIDATIONPAIR: new ethers.Contract(
        vault.LIQUIDATIONPAIR,
        ABI.LIQUIDATIONPAIR,
        PROVIDERS[CONFIG.CHAINNAME]
      ),*/
      VAULT: new ethers.Contract(
        vault.VAULT,
        ABI.VAULT,
        PROVIDERS[CONFIG.CHAINNAME]
      ),
    })),
  },
  LIQUIDATIONROUTER: {
    [CONFIG.CHAINNAME]: new ethers.Contract(
      ADDRESS[CONFIG.CHAINNAME].LIQUIDATIONROUTER,
      ABI.LIQUIDATIONROUTER,
      PROVIDERS[CONFIG.CHAINNAME]
    ),
  },
/*  LIQUIDATIONPAIRFACTORY: {
    [CONFIG.CHAINNAME]: new ethers.Contract(
      ADDRESS[CONFIG.CHAINNAME].LIQUIDATIONPAIRFACTORY,
      ABI.LIQUIDATIONPAIRFACTORY,
      PROVIDERS[CONFIG.CHAINNAME]
    ),
  },
*/
PRIZETOKEN: {
    [CONFIG.CHAINNAME]: new ethers.Contract(
      ADDRESS[CONFIG.CHAINNAME].PRIZETOKEN.ADDRESS,
      ABI.ERC20,
      PROVIDERS[CONFIG.CHAINNAME]
    ),
  },
  /*POOL: {
    [CONFIG.CHAINNAME]: new ethers.Contract(
      ADDRESS[CONFIG.CHAINNAME].PRIZETOKEN.ADDRESS,
      ABI.POOL,
      PROVIDERS[CONFIG.CHAINNAME]
    ),
  },*/
/*  TOKENFAUCET: {
    [CONFIG.CHAINNAME]: new ethers.Contract(
      ADDRESS[CONFIG.CHAINNAME].TOKENFAUCET,
      ABI.TOKENFAUCET,
      SIGNER
    ),
  },*/
  PRIZEPOOL: {
    [CONFIG.CHAINNAME]: new ethers.Contract(
      ADDRESS[CONFIG.CHAINNAME].PRIZEPOOL,
      ABI.PRIZEPOOL,
      PROVIDERS[CONFIG.CHAINNAME]
    ),
  },

  RNG: {
    [CONFIG.CHAINNAME]: new ethers.Contract(
      ADDRESS[CONFIG.CHAINNAME].RNG,
      ABI.RNG,
      PROVIDERS[CONFIG.CHAINNAME]
    ),
  },
 DRAWMANAGER: {
    [CONFIG.CHAINNAME]: new ethers.Contract(
      ADDRESS[CONFIG.CHAINNAME].DRAWMANAGER,
      ABI.DRAWMANAGER,
      PROVIDERS[CONFIG.CHAINNAME]
    ),
  },
 /*RNGWITHSIGNER: {
    [CONFIG.CHAINNAME]: new ethers.Contract(
      ADDRESS[CONFIG.CHAINNAME].RNG,
      ABI.RNG,
      SIGNER
    ),
  },
 DRAWMANAGERWITHSIGNER: {
    [CONFIG.CHAINNAME]: new ethers.Contract(
      ADDRESS[CONFIG.CHAINNAME].DRAWMANAGER,
      ABI.DRAWMANAGER,
      SIGNER
    ),
  },
  PRIZEPOOLWITHSIGNER: {
    [CONFIG.CHAINNAME]: new ethers.Contract(
      ADDRESS[CONFIG.CHAINNAME].PRIZEPOOL,
      ABI.PRIZEPOOL,
      SIGNER
    ),
  },

PRIZETOKENWITHSIGNER: {
    [CONFIG.CHAINNAME]: new ethers.Contract(
      ADDRESS[CONFIG.CHAINNAME].PRIZETOKEN.ADDRESS,
      ABI.ERC20,
      SIGNER
    ),
  },*/
  /*POOLWITHSIGNER: {
    [CONFIG.CHAINNAME]: new ethers.Contract(
      ADDRESS[CONFIG.CHAINNAME].PRIZETOKEN.ADDRESS,
      ABI.POOL,
      SIGNER
    ),
  },
  LIQUIDATIONROUTERSIGNER: {
    [CONFIG.CHAINNAME]: new ethers.Contract(
      ADDRESS[CONFIG.CHAINNAME].LIQUIDATIONROUTER,
      ABI.LIQUIDATIONROUTER,
      SIGNER
    ),
  },*/
};

module.exports = { CONTRACTS };

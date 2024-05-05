

const ADDRESS = {
OPTIMISM: {
 PRIZEPOOLSUBGRAPH: 'https://api.studio.thegraph.com/proxy/63100/pt-v5-optimism/version/latest/',
  PRIZETOKEN: {
    ADDRESS: "0x4200000000000000000000000000000000000006",
    SYMBOL: "WETH",
    NAME: "WETH",
    DECIMALS: 18,
    GECKO: "weth"},
  GASORACLE: '0x420000000000000000000000000000000000000F',
  SWAPPER: '0xc8dd1b10e45d7ae0be9bc656d094565d64e1b11b',
  DRAWMANAGER: '0x7eED7444dE862c4F79c5820ff867FA3A82641857',
  RNG: '0x3d2Ef6C091f7CB69f06Ec3117F36A28BC596aa7B',
  TWABCONTROLLER: '0xCB0672dE558Ad8F122C0E081f0D35480aB3be167',
  LIQUIDATIONROUTER: '0x7766b5E6839a1a218Fc861b0810C504490876136',

  VAULTFACTORY: '0x0c379e9b71ba7079084ada0d1c1aeb85d24dfd39',

  VAULTFACTORYSEPOLIA: '0x5eCC83B1A0bA255713b69154451826a937702435', //remove

  LIQUIDATIONPAIRFACTORY: '0x80F86691632d9863E6bCaa472e5c34574F77c7D1',

  LIQUIDATIONPAIRFACTORYSEPOLIA: '0x702f41210B66893169e302DCF52F13eb7646CC79', //just testing remove
  
  PRIZEPOOL: '0xF35fE10ffd0a9672d0095c435fd8767A7fe29B55',
  CLAIMERFACTORY: '0x498C92bEF017A91018ecCAE29b3b3C531e3f4794',
  CLAIMER: '0x0b5a1dc536D5A67C66D00B337E6b189385BD8438',
  VAULTS: [
{
        VAULT: "0x03d3ce84279cb6f54f5e6074ff0f8319d830dafe",
        LIQUIDATIONPAIR: "0x7d72e1043FBaCF54aDc0610EA8649b23055462f0",
        SYMBOL: "przUSDC",
        NAME: "Prize USDC",
        DECIMALS: 6,
        ASSET: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
        ASSETSYMBOL: "USDC",
        ICON: "https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389",
        GECKO: "usd-coin",
        VAULTICON: "https://app.cabana.fi/icons/pUSDC.e.svg",
      },
  {
    VAULT: '0xa52e38a9147f5eA9E0c5547376c21c9E3F3e5e1f',
    LIQUIDATIONPAIR: '0x0000000000000000000000000000000000000000',
    SYMBOL: 'przPOOL',
    NAME: 'Prize POOL',
    DECIMALS: 18,
    ASSET: '0x395Ae52bB17aef68C2888d941736A71dC6d4e125',
    ASSETSYMBOL: 'POOL',
    ICON: 'https://assets.coingecko.com/coins/images/14003/standard/PoolTogether.png?1696513732',
    GECKO: 'pooltogether',
    VAULTICON: ''
  },
  {
    VAULT: '0x3e8DBe51DA479f7E8aC46307af99AD5B4B5b41Dc',
    LIQUIDATIONPAIR: '0xC9a3ebe8D34941eC7974b439a346D5F6880A70e8',
    SYMBOL: 'przDAI',
    NAME: 'Prize DAI',
    DECIMALS: 18,
    ASSET: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
    ASSETSYMBOL: 'DAI',
    ICON: 'https://assets.coingecko.com/coins/images/9956/standard/Badge_Dai.png?1696509996',
    GECKO: 'dai',
    VAULTICON: 'https://app.cabana.fi/icons/pDAI.svg'
  },
  {
    VAULT: '0x1F16D3CCF568e96019cEdc8a2c79d2ca6257894E',
    LIQUIDATIONPAIR: '0xf040A530fE669Fc334ba924b1fC9971c17301281',
    SYMBOL: 'przLUSD',
    NAME: 'Prize LUSD',
    DECIMALS: 18,
    ASSET: '0xc40F949F8a4e094D1b49a23ea9241D289B7b2819',
    ASSETSYMBOL: 'LUSD',
    ICON: 'https://assets.coingecko.com/coins/images/14666/standard/Group_3.png?1696514341',
    GECKO: 'liquity-usd',
    VAULTICON: 'https://assets.coingecko.com/coins/images/14666/standard/Group_3.png?1696514341'
  },
  {
    VAULT: '0x2998c1685E308661123F64B333767266035f5020',
    LIQUIDATIONPAIR: '0x006e714accBFEecD561a9B590e919402e871a91D',
    SYMBOL: 'przWETH',
    NAME: 'Prize WETH',
    DECIMALS: 18,
    ASSET: '0x4200000000000000000000000000000000000006',
    ASSETSYMBOL: 'WETH',
    ICON: 'https://uploads-ssl.webflow.com/631993187031511c025c721d/633c1ccea93ff4709ab091c2_633be870ec7f86530e8e5419_WETH.png',
    GECKO: 'ethereum',
    VAULTICON: 'https://app.cabana.fi/icons/pWETH.svg'
  }
],
BOOSTS:[],
PAIRS: [ 
{
VAULT: '0x4200000000000000000000000000000000000042',
LIQUIDATIONPAIR: '0xBb15Bce7E4a076d2606838DCeE60De84f06b0611',
SYMBOL: 'aaveOPRewards',
NAME: 'Aave OP Rewards',
DECIMALS: 18,
ASSET: '0x4200000000000000000000000000000000000042',
ASSETSYMBOL: 'OP',
GECKO: 'optimism',
NOVAULT: true,
}
]
},

};
const STARTBLOCK = {
  OPTIMISM: {
    PRIZEPOOL: 118900268,
  },
};

  module.exports = { ADDRESS, STARTBLOCK };

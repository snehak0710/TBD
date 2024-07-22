require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  paths: {
    artifacts: "./src",
  },
  networks: {
    zkEVM: {
      url: `https://rpc.cardona.zkevm-rpc.com`,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
      chainId: 2442,
    },
    // inf: {
    //   url: `https://polygon-mainnet.infura.io/v3/${process.env.INF_PRIVATE_KEY}`,
    //   accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    // //   chainId: 2442,
    // },
  },
};

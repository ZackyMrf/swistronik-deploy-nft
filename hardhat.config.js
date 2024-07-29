require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  defaultNetwork: "swisstronik",
  networks: {
    hardhat: {
      // Konfigurasi untuk jaringan Hardhat lokal
    },
    swisstronik: {
      url: process.env.SWISSTRONIK_RPC_URL || "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
  solidity: "0.8.4",
};

require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const SEPOLIA_URL = process.env.SEPOLIA_URL;
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.24", // Update to a valid version
  networks: {
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
    localhost: {
      url: "http://127.0.0.1:8545",
    },
  },
};

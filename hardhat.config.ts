import { HardhatUserConfig } from "hardhat/types";
import path from "path";
import fs from "fs";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-contract-sizer";
import "@nomiclabs/hardhat-etherscan";
import "solidity-coverage";
import "hardhat-gas-reporter";

require("dotenv").config();

/*['fork'].forEach(
  (folder) => {
    const tasksPath = path.join(__dirname, 'tasks', folder);
    fs.readdirSync(tasksPath)
      .filter((pth) => pth.includes('.ts'))
      .forEach((task) => {
        require(`${tasksPath}/${task}`);
      });
  }
);*/

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [
      {
        version: "0.8.10",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  },
  networks: {
    hardhat: {
      forking: {
        url: "https://rpc.v4.testnet.pulsechain.com",
        blockNumber: 14753800,
      },
    },
    mainnet: {
      url: "https://rpc.v4.testnet.pulsechain.com",
      accountsBalance: "10000000000000000000000000000",
    },
    fork: {
      url: "https://rpc.v4.testnet.pulsechain.com",
      accountsBalance: "10000000000000000000000000000",
    },
    mocha: {
      url: "https://rpc.v4.testnet.pulsechain.com",
      timeout: 0,
    },
    typechain: {
      outDir: "typechain",
      target: "ethers-v5",
      url: "https://rpc.v4.testnet.pulsechain.com",
    },
    gasReporter: {
      enabled: true,
      url: "https://rpc.v4.testnet.pulsechain.com",
    },
  },
};

export default config;

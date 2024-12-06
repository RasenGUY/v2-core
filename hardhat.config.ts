import { HardhatUserConfig } from "hardhat/config";
import { pickBy } from 'lodash'

import "@nomicfoundation/hardhat-toolbox";

const settings = {
  optimizer: {
    enabled: true,
    runs: 200,
  },
};
const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.5.16',
        settings,
      },
      {
        version: '0.5.0',
        settings,
      },
      {
        version: '0.6.6',
        settings: {
          ...settings,
          metadata: {
            bytecodeHash: 'none',
          },
        },
      },
    ],
    overrides: {
      "@uniswap/lib/contracts/libraries/BitMath.sol": {
        version: "0.5.0", // Specify a compatible version
      },
    },
  },
  networks: {
    hardhat: {
      gasMultiplier: 1.03,
      accounts: {
        count: 40,
      },
      forking: {
        url: process.env.FORKED_CHAIN_NETWORK as string
      },
    },
    localhost: {
      url: 'http://127.0.0.1:8545',
      chainId: 31337,
      forking: {
        url: process.env.FORKED_CHAIN_NETWORK as string,
        enabled: false,
      },
      throwOnTransactionFailures: true,
      loggingEnabled: true,
    },
    optimismSepolia: {
      url: String(process.env.OPTIMISM_SEPOLIA_RPC_URL).concat(
        String(process.env.OPTIMISM_SEPOLIA_RPC_API_KEY),
      ),
      chainId: 11155420,
      accounts: [
        process.env.OPTIMISM_SEPOLIA_HDNS_PRIVATE_KEY as string,
        process.env.OPTIMISM_SEPOLIA_PROTOCOL_ADMIN_PRIVATE_KEY as string,
      ],
      loggingEnabled: true,
    },
  },
  etherscan: {
    apiKey: pickBy({
      mainnet: process.env.ETHERSCAN_API_KEY,
      goerli: process.env.ETHERSCAN_API_KEY,
      polygon: process.env.POLYGONSCAN_API_KEY,
      polygonMumbai: process.env.MUMBAI_ETHERSCAN_API_KEY,
      optimisticEthereum: process.env.OPTIMISM_ETHERSCAN_API_KEY,
      optimismSepolia: process.env.OPTIMISM_SEPOLIA_ETHERSCAN_API_KEY,
    }) as Record<string, string>,
    customChains: [
      {
        network: 'optimismSepolia',
        chainId: 11155420,
        urls: {
          apiURL: 'https://api-sepolia-optimistic.etherscan.io/api',
          browserURL: 'https://sepolia-optimism.etherscan.io',
        },
      },
    ],
  },
};

export default config;

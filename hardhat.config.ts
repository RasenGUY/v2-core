import { HardhatUserConfig } from "hardhat/config";
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
};

export default config;

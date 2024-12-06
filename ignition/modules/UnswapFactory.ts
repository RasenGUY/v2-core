import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const UniswapFactory = buildModule("UniswapFactory", (m) => {
  const factory = m.contract("UniswapV2Factory");
  return { factory };
});

module.exports = UniswapFactory;
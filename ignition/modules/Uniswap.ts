import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { ZeroAddress } from "ethers";

const UnswapModule = buildModule("UniswapModule", (m) => {
    const weth = m.contract("WETH9");   
    const factory = m.contract("UniswapV2Factory",  [
        ZeroAddress
    ]);
    const router = m.contract("UniswapV2Router02", [
        factory,
        weth
    ])
    return { weth, factory, router };
});

module.exports = UnswapModule;
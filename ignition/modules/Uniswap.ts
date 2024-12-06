import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const UnswapModule = buildModule("UniswapModule", (m) => {
    const owner = m.getAccount(0);
    const token = m.contract("TestToken", [], { id: 'token', from: owner }); 
    const weth = m.contract("WETH9", [], {
        id: "weth"
    });
    const factory = m.contract("UniswapV2Factory",  [
        owner
    ],
    {
        id: "factory",
        after: [weth], // wait for weth to be deployed
    });
    const router = m.contract("UniswapV2Router02", [
        factory,
        weth
    ], {
        id: "router", 
        after: [weth, factory], // wait for weth and factory to be deployed
    })
    return { weth, factory, router, token };
});

module.exports = UnswapModule;
import { ethers } from 'hardhat';
import { parseEther, JsonRpcProvider } from 'ethers';
import fs from 'fs';
import path from 'path';

import UniswapRouterAbi from '../artifacts/contracts/periphery/UniswapV2Router02.sol/UniswapV2Router02.json';
import UniswapFactoryAbi from '../artifacts/contracts/core/UniswapV2Factory.sol/UniswapV2Factory.json';
import WETHAbi from '../artifacts/contracts/periphery/WETH.sol/WETH9.json';
import TestTokenAbi from '../artifacts/contracts/periphery/TestToken.sol/TestToken.json';
import deployedAddresses from '../ignition/deployments/chain-31337/deployed_addresses.json';

const factoryAddress = deployedAddresses['UniswapModule#factory'];
const routerAddress = deployedAddresses['UniswapModule#router'];
const wetAddress = deployedAddresses['UniswapModule#weth'];
const testTokenAddress = deployedAddresses['UniswapModule#token'];

async function createPool(){
    // context, the owner (account 0) already has roughly 1000000 TestToken
    // 1. instantiate the factory, 
    // 2. instantiate and the routerv2
    // 3. prepare the call (for addLiquidityETH) on UniswapV2Router02.sol
        // token, // should be space token
        // amountTokenDesired, ?? 
        // amountTokenMin, ?? 
        // amountETHMin, ??
        // to,
        // deadline 1min
        
    const provider = new JsonRpcProvider('http://localhost:8545');
    const owner = new ethers.Wallet('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', provider);
    

    const factory = new ethers.Contract(
        factoryAddress,
        UniswapFactoryAbi.abi,
        owner
    );

    const router = new ethers.Contract(
        routerAddress,
        UniswapRouterAbi.abi,
        owner
    );

    const testToken = new ethers.Contract(
        testTokenAddress,
        TestTokenAbi.abi,
        owner
    );

    const weth = new ethers.Contract(
        wetAddress,
        WETHAbi.abi,
        owner
    );

    await testToken.approve(router.target, ethers.parseEther('1000000'));

    const tx = await router.addLiquidityETH(
        testToken.target,
        parseEther('1000'),
        0,
        parseEther('10'),
        owner.address,
        Math.floor(Date.now() / 1000) + 60,
        { 
            value: ethers.parseEther('10') 
        }
    );

    await tx.wait();
    

    // Call getPair as a function, not a property
    const pairAddress = await factory.getPair(testToken.target, weth.target);
    
    console.log({
        message: "Liquidity added",
    });
    
    const pairData = {
        pairAddress: pairAddress
    };
    fs.writeFileSync(
        path.join(__dirname, 'pair-address.json'),
        JSON.stringify(pairData, null, 2)
    );
    
    // return pairAddress;
}

async function swapTokensForEth(){
    // swap test tokens for eth
    // const [owner] = ethers.getSigners()
    
    // const { tokenA, tokenB, pair, router } = await createPool()
    // await tokenA.mint(owner.address, ethers.utils.parseEther('100'))
    // await tokenA.approve(router.address, ethers.utils.parseEther('100'))
    // await router.swapExactTokensForETH(ethers.utils.parseEther('100'), 0, [tokenA.address, tokenB.address], owner.address, 9999999999)
}  

async function swapEthForTokens(){
    // swap eth for space
    // const [owner] = ethers.getSigners()
    // const { tokenA, tokenB, pair, router } = await createPool()
    // await router.swapExactETHForTokens(0, [tokenA.address, tokenB.address], owner.address, 9999999999)
}

async function addLiquidity(){
    // add liquidity
    // const [owner] = ethers.getSigners()
    // const { tokenA, tokenB, pair, router } = await createPool()
    // await tokenA.mint(owner.address, ethers.utils.parseEther('100'))
    // await tokenB.mint(owner.address, ethers.utils.parseEther('100'))
    // await tokenA.approve(router.address, ethers.utils.parseEther('100'))
    // await tokenB.approve(router.address, ethers.utils.parseEther('100'))
    // await router.addLiquidity(tokenA.address, tokenB.address, ethers.utils.parseEther('100'), ethers.utils.parseEther('100'), 0, 0, owner.address, 9999999999)
}


async function main() {
    const pool = await createPool();
    console.log('Successfully Create Pool: ', pool);

}

main().catch((error) => {
    console.error(error)
    process.exit(1)
})
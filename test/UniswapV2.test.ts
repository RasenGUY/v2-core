import { expect } from "chai";
import hre, { ignition } from 'hardhat';
import { parseEther, ZeroAddress } from 'ethers';

import UniswapModule from '../ignition/modules/Uniswap';

describe('Uniswap V2', () => {

    describe('Router',()=> {
        // Then in your test:
        it('should successfully create a pool when adding liquidity', async () => {
            const owner = (await hre.ethers.getSigners())[0];
            
            const {
                router,
                weth,
                token,
                factory
            } = await ignition.deploy(UniswapModule);
            

            
            // Now proceed with adding liquidity
            await token.approve(router.target, parseEther('1000000'));
            
            await router.addLiquidityETH(
                token.target,
                parseEther('1000'),
                parseEther('1000'),
                parseEther('10'),
                owner.address,
                Math.floor(Date.now() / 1000) + 60,
                { 
                    value: parseEther('10')
                }
            );
            
            const actualPairAddress = await factory.getPair(weth.target, token.target);

            expect(actualPairAddress).to.not.equal(ZeroAddress);
        });    
    });    
})

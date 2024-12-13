import { getCreate2Address, keccak256, solidityPacked } from "ethers";

export async function getInitCodeHash(v2Pair: any): Promise<string> {
    // The init code hash is simply the keccak256 of the pair contract bytecode
    return keccak256(v2Pair.bytecode);
}

// Helper function to compute pair address (optional, for verification)
function computePairAddress(
    factoryAddress: string,
    token0: string,
    token1: string,
    initCodeHash: string
): string {
    const salt = keccak256(
        solidityPacked(
            ['address', 'address'],
            [token0, token1]
        )
    );

    return getCreate2Address(
        factoryAddress,
        salt,
        initCodeHash
    );
}

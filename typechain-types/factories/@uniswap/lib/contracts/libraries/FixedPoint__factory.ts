/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type {
  FixedPoint,
  FixedPointInterface,
} from "../../../../../@uniswap/lib/contracts/libraries/FixedPoint";

const _abi = [
  {
    inputs: [],
    name: "Q112",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RESOLUTION",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6090610025600b82828239805160001a60731461001857fe5b30600052607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610603d5760003560e01c80633bf7a83e146042578063552f888a14605a575b600080fd5b60486076565b60408051918252519081900360200190f35b6060607e565b6040805160ff9092168252519081900360200190f35b600160701b81565b60708156fea164736f6c6343000606000a";

type FixedPointConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FixedPointConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FixedPoint__factory extends ContractFactory {
  constructor(...args: FixedPointConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      FixedPoint & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): FixedPoint__factory {
    return super.connect(runner) as FixedPoint__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FixedPointInterface {
    return new Interface(_abi) as FixedPointInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): FixedPoint {
    return new Contract(address, _abi, runner) as unknown as FixedPoint;
  }
}

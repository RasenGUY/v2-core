/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  ExampleSwapToPrice,
  ExampleSwapToPriceInterface,
} from "../../../../contracts/periphery/examples/ExampleSwapToPrice";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "factory_",
        type: "address",
      },
      {
        internalType: "contract IUniswapV2Router01",
        name: "router_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "router",
    outputs: [
      {
        internalType: "contract IUniswapV2Router01",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "truePriceTokenA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "truePriceTokenB",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxSpendTokenA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxSpendTokenB",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swapToPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c060405234801561001057600080fd5b50604051610f94380380610f948339818101604052604081101561003357600080fd5b5080516020909101516001600160601b0319606092831b811660a052911b1660805260805160601c60a05160601c610f0761008d6000398061019152806104af52508061025b52806102fe52806104d35250610f076000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063bef90fd314610046578063c45a01551461009d578063f887ea40146100c1575b600080fd5b61009b600480360361010081101561005d57600080fd5b506001600160a01b038135811691602081013582169160408201359160608101359160808201359160a08101359160c0820135169060e001356100c9565b005b6100a56104ad565b604080516001600160a01b039092168252519081900360200190f35b6100a56104d1565b85158015906100d757508415155b610128576040805162461bcd60e51b815260206004820152601e60248201527f4578616d706c6553776170546f50726963653a205a45524f5f50524943450000604482015290519081900360640190fd5b8315158061013557508215155b610186576040805162461bcd60e51b815260206004820152601e60248201527f4578616d706c6553776170546f50726963653a205a45524f5f5350454e440000604482015290519081900360640190fd5b6000806000806101b77f00000000000000000000000000000000000000000000000000000000000000008d8d6104f5565b915091506101c78a8a84846105c3565b909450925050508061020a5760405162461bcd60e51b8152600401808060200182810382526022815260200180610ed96022913960400191505060405180910390fd5b6000826102175785610219565b865b905080821115610227578091505b600083610234578a610236565b8b5b9050600084610245578c610247565b8b5b9050610255823330876106af565b610280827f00000000000000000000000000000000000000000000000000000000000000008661080c565b604080516002808252606080830184529260208301908036833701905050905082816000815181106102ae57fe5b60200260200101906001600160a01b031690816001600160a01b03168152505081816001815181106102dc57fe5b60200260200101906001600160a01b031690816001600160a01b0316815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166338ed1739866000848c8c6040518663ffffffff1660e01b81526004018086815260200185815260200180602001846001600160a01b03166001600160a01b03168152602001838152602001828103825285818151815260200191508051906020019060200280838360005b838110156103aa578181015183820152602001610392565b505050509050019650505050505050600060405180830381600087803b1580156103d357600080fd5b505af11580156103e7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561041057600080fd5b810190808051604051939291908464010000000082111561043057600080fd5b90830190602082018581111561044557600080fd5b825186602082028301116401000000008211171561046257600080fd5b82525081516020918201928201910280838360005b8381101561048f578181015183820152602001610477565b50505050905001604052505050505050505050505050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008060006105048585610960565b509050600080610515888888610a3e565b6001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561054d57600080fd5b505afa158015610561573d6000803e3d6000fd5b505050506040513d606081101561057757600080fd5b5080516020909101516dffffffffffffffffffffffffffff91821693501690506001600160a01b03878116908416146105b15780826105b4565b81815b90999098509650505050505050565b600080856105d2858786610afe565b10915060006105e7858563ffffffff610bb916565b90506000610639610634610603846103e863ffffffff610bb916565b8661060e5789610610565b8a5b61062f6103e589610621578d610623565b8c5b9063ffffffff610bb916565b610afe565b610c22565b905060006103e58561065c57610657876103e863ffffffff610bb916565b61066e565b61066e886103e863ffffffff610bb916565b8161067557fe5b049050808210156106905750600093508392506106a6915050565b6106a0828263ffffffff610d6a16565b93505050505b94509492505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17815292518251600094606094938a169392918291908083835b602083106107345780518252601f199092019160209182019101610715565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610796576040519150601f19603f3d011682016040523d82523d6000602084013e61079b565b606091505b50915091508180156107c95750805115806107c957508080602001905160208110156107c657600080fd5b50515b6108045760405162461bcd60e51b8152600401808060200182810382526031815260200180610e586031913960400191505060405180910390fd5b505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663095ea7b360e01b178152925182516000946060949389169392918291908083835b602083106108895780518252601f19909201916020918201910161086a565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146108eb576040519150601f19603f3d011682016040523d82523d6000602084013e6108f0565b606091505b509150915081801561091e57508051158061091e575080806020019051602081101561091b57600080fd5b50515b6109595760405162461bcd60e51b815260040180806020018281038252602b815260200180610eae602b913960400191505060405180910390fd5b5050505050565b600080826001600160a01b0316846001600160a01b031614156109b45760405162461bcd60e51b8152600401808060200182810382526025815260200180610e896025913960400191505060405180910390fd5b826001600160a01b0316846001600160a01b0316106109d45782846109d7565b83835b90925090506001600160a01b038216610a37576040805162461bcd60e51b815260206004820152601e60248201527f556e697377617056324c6962726172793a205a45524f5f414444524553530000604482015290519081900360640190fd5b9250929050565b6000806000610a4d8585610960565b604080516bffffffffffffffffffffffff19606094851b811660208084019190915293851b81166034830152825160288184030181526048830184528051908501206001600160f81b031960688401529a90941b9093166069840152607d8301989098527fc4397612d9fd3e06a517e63713ac23fcc2d71f9becb8e3f668649839b4db5ca8609d808401919091528851808403909101815260bd909201909752805196019590952095945050505050565b6000806000610b0d8686610dba565b9150915060008480610b1b57fe5b868809905082811115610b2f576001820391505b918290039181610b4d57848381610b4257fe5b049350505050610bb2565b848210610ba1576040805162461bcd60e51b815260206004820152601a60248201527f46756c6c4d6174683a2046554c4c4449565f4f564552464c4f57000000000000604482015290519081900360640190fd5b610bac838387610de7565b93505050505b9392505050565b6000811580610bd457505080820282828281610bd157fe5b04145b610c1c576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604482015290519081900360640190fd5b92915050565b600081610c3157506000610d65565b816001600160801b8210610c4a5760809190911c9060401b5b680100000000000000008210610c655760409190911c9060201b5b6401000000008210610c7c5760209190911c9060101b5b620100008210610c915760109190911c9060081b5b6101008210610ca55760089190911c9060041b5b60108210610cb85760049190911c9060021b5b60088210610cc45760011b5b6001818581610ccf57fe5b048201901c90506001818581610ce157fe5b048201901c90506001818581610cf357fe5b048201901c90506001818581610d0557fe5b048201901c90506001818581610d1757fe5b048201901c90506001818581610d2957fe5b048201901c90506001818581610d3b57fe5b048201901c90506000818581610d4d57fe5b049050808210610d5d5780610d5f565b815b93505050505b919050565b80820382811115610c1c576040805162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b604482015290519081900360640190fd5b6000808060001984860990508385029250828103915082811015610ddf576001820391505b509250929050565b60008181038216808381610df757fe5b049250808581610e0357fe5b049450808160000381610e1257fe5b6002858103808702820302808702820302808702820302808702820302808702820302808702820302958602900390940293046001019390930293909301029291505056fe5472616e7366657248656c7065723a3a7472616e7366657246726f6d3a207472616e7366657246726f6d206661696c6564556e697377617056324c6962726172793a204944454e544943414c5f4144445245535345535472616e7366657248656c7065723a3a73616665417070726f76653a20617070726f7665206661696c65644578616d706c6553776170546f50726963653a205a45524f5f414d4f554e545f494ea164736f6c6343000606000a";

type ExampleSwapToPriceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExampleSwapToPriceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ExampleSwapToPrice__factory extends ContractFactory {
  constructor(...args: ExampleSwapToPriceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    factory_: AddressLike,
    router_: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(factory_, router_, overrides || {});
  }
  override deploy(
    factory_: AddressLike,
    router_: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(factory_, router_, overrides || {}) as Promise<
      ExampleSwapToPrice & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ExampleSwapToPrice__factory {
    return super.connect(runner) as ExampleSwapToPrice__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExampleSwapToPriceInterface {
    return new Interface(_abi) as ExampleSwapToPriceInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ExampleSwapToPrice {
    return new Contract(address, _abi, runner) as unknown as ExampleSwapToPrice;
  }
}
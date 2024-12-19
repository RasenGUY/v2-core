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
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  ExampleSlidingWindowOracle,
  ExampleSlidingWindowOracleInterface,
} from "../../../../contracts/periphery/examples/ExampleSlidingWindowOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "factory_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "windowSize_",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "granularity_",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
    ],
    name: "consult",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
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
    name: "granularity",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "observationIndexOf",
    outputs: [
      {
        internalType: "uint8",
        name: "index",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "pairObservations",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price0Cumulative",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price1Cumulative",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "periodSize",
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
    ],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "windowSize",
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
] as const;

const _bytecode =
  "0x61010060405234801561001157600080fd5b506040516110463803806110468339818101604052606081101561003457600080fd5b5080516020820151604090920151909190600160ff82161161009d576040805162461bcd60e51b815260206004820181905260248201527f536c6964696e6757696e646f774f7261636c653a204752414e554c4152495459604482015290519081900360640190fd5b8160ff82168082816100ab57fe5b0460e081905202146100ee5760405162461bcd60e51b81526004018080602001828103825260308152602001806110166030913960400191505060405180910390fd5b606083901b6001600160601b03191660805260a082905260f881901b7fff000000000000000000000000000000000000000000000000000000000000001660c05260e0516001600160a01b039093169260ff90911690610e7761019f600039806102a952806104eb528061053e528061059e5250806101c05280610448528061056a52806106925250806101e4528061024a52806102cd52508061020e52806103da52806104035250610e776000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063c45a01551161005b578063c45a015514610145578063c640752d14610169578063dbaad32f14610199578063e4463eb2146101b657610088565b8063556f0dc71461008d5780638a14117a146100ab5780638c86f1e4146100c5578063bfcc8e42146100fb575b600080fd5b6100956101be565b6040805160ff9092168252519081900360200190f35b6100b36101e2565b60408051918252519081900360200190f35b6100b3600480360360608110156100db57600080fd5b506001600160a01b03813581169160208101359160409091013516610206565b6101276004803603604081101561011157600080fd5b506001600160a01b038135169060200135610399565b60408051938452602084019290925282820152519081900360600190f35b61014d6103d8565b604080516001600160a01b039092168252519081900360200190f35b6101976004803603604081101561017f57600080fd5b506001600160a01b03813581169160200135166103fc565b005b610095600480360360208110156101af57600080fd5b5035610539565b6100b361059c565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000806102347f000000000000000000000000000000000000000000000000000000000000000086856105c0565b9050600061024182610680565b805490915042037f00000000000000000000000000000000000000000000000000000000000000008111156102a75760405162461bcd60e51b8152600401808060200182810382526033815260200180610dc16033913960400191505060405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006002027f00000000000000000000000000000000000000000000000000000000000000000381101561032b5760405162461bcd60e51b815260040180806020018281038252602c815260200180610df4602c913960400191505060405180910390fd5b6000806103378561070e565b509150915060006103488a896108fd565b509050896001600160a01b0316816001600160a01b0316141561038257610375856001015484868c6109db565b9650505050505050610392565b610375856002015483868c6109db565b9392505050565b600060205281600052604060002081815481106103b257fe5b600091825260209091206003909102018054600182015460029092015490935090915083565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006104297f000000000000000000000000000000000000000000000000000000000000000084846105c0565b6001600160a01b0381166000908152602081905260409020549091505b7f000000000000000000000000000000000000000000000000000000000000000060ff1681101561049a576001600160a01b0382166000908152602081905260408120805460019081018255915201610446565b5060006104a642610539565b6001600160a01b03831660009081526020819052604081208054929350909160ff84169081106104d257fe5b60009182526020909120600390910201805490915042037f00000000000000000000000000000000000000000000000000000000000000008111156105315760008061051d8661070e565b504286556001860191909155600285015550505b505050505050565b6000807f0000000000000000000000000000000000000000000000000000000000000000838161056557fe5b0490507f000000000000000000000000000000000000000000000000000000000000000060ff16818161059457fe5b069392505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008060006105cf85856108fd565b604080516bffffffffffffffffffffffff19606094851b811660208084019190915293851b81166034830152825160288184030181526048830184528051908501206001600160f81b031960688401529a90941b9093166069840152607d8301989098527fc4397612d9fd3e06a517e63713ac23fcc2d71f9becb8e3f668649839b4db5ca8609d808401919091528851808403909101815260bd909201909752805196019590952095945050505050565b60008061068c42610539565b905060007f000000000000000000000000000000000000000000000000000000000000000060ff168260010160ff16816106c257fe5b069050600080856001600160a01b03166001600160a01b031681526020019081526020016000208160ff16815481106106f757fe5b906000526020600020906003020192505050919050565b600080600061071b610a2e565b9050836001600160a01b0316635909c0d56040518163ffffffff1660e01b815260040160206040518083038186803b15801561075657600080fd5b505afa15801561076a573d6000803e3d6000fd5b505050506040513d602081101561078057600080fd5b505160408051635a3d549360e01b815290519194506001600160a01b03861691635a3d549391600480820192602092909190829003018186803b1580156107c657600080fd5b505afa1580156107da573d6000803e3d6000fd5b505050506040513d60208110156107f057600080fd5b505160408051630240bc6b60e21b81529051919350600091829182916001600160a01b03891691630902f1ac916004808301926060929190829003018186803b15801561083c57600080fd5b505afa158015610850573d6000803e3d6000fd5b505050506040513d606081101561086657600080fd5b5080516020820151604090920151909450909250905063ffffffff808216908516146108f35780840363ffffffff81166108ac6001600160701b03808616908716610a38565b600001516001600160e01b031602870196508063ffffffff166108e1856001600160701b0316856001600160701b0316610a38565b516001600160e01b0316029590950194505b5050509193909250565b600080826001600160a01b0316846001600160a01b031614156109515760405162461bcd60e51b8152600401808060200182810382526025815260200180610e206025913960400191505060405180910390fd5b826001600160a01b0316846001600160a01b031610610971578284610974565b83835b90925090506001600160a01b0382166109d4576040805162461bcd60e51b815260206004820152601e60248201527f556e697377617056324c6962726172793a205a45524f5f414444524553530000604482015290519081900360640190fd5b9250929050565b60006109e5610d9b565b604051806020016040528085888803816109fb57fe5b046001600160e01b031690529050610a1b610a168285610baa565b610c3e565b6001600160901b03169695505050505050565b63ffffffff421690565b610a40610d9b565b60008211610a7f5760405162461bcd60e51b8152600401808060200182810382526026815260200180610e456026913960400191505060405180910390fd5b82610a995750604080516020810190915260008152610ba4565b6001600160901b038311610b3557600082607085901b81610ab657fe5b0490506001600160e01b03811115610b15576040805162461bcd60e51b815260206004820152601e60248201527f4669786564506f696e743a3a6672616374696f6e3a206f766572666c6f770000604482015290519081900360640190fd5b6040518060200160405280826001600160e01b0316815250915050610ba4565b6000610b4684600160701b85610c45565b90506001600160e01b03811115610b15576040805162461bcd60e51b815260206004820152601e60248201527f4669786564506f696e743a3a6672616374696f6e3a206f766572666c6f770000604482015290519081900360640190fd5b92915050565b610bb2610dad565b6000821580610bd857505082516001600160e01b031682810290838281610bd557fe5b04145b610c29576040805162461bcd60e51b815260206004820152601960248201527f4669786564506f696e743a3a6d756c3a206f766572666c6f7700000000000000604482015290519081900360640190fd5b60408051602081019091529081529392505050565b5160701c90565b6000806000610c548686610cfe565b9150915060008480610c6257fe5b868809905082811115610c76576001820391505b918290039181610c9457848381610c8957fe5b049350505050610392565b848210610ce8576040805162461bcd60e51b815260206004820152601a60248201527f46756c6c4d6174683a2046554c4c4449565f4f564552464c4f57000000000000604482015290519081900360640190fd5b610cf3838387610d2b565b979650505050505050565b6000808060001984860990508385029250828103915082811015610d23576001820391505b509250929050565b60008181038216808381610d3b57fe5b049250808581610d4757fe5b049450808160000381610d5657fe5b60028581038087028203028087028203028087028203028087028203028087028203028087028203029586029003909402930460010193909302939093010292915050565b60408051602081019091526000815290565b604051806020016040528060008152509056fe536c6964696e6757696e646f774f7261636c653a204d495353494e475f484953544f524943414c5f4f42534552564154494f4e536c6964696e6757696e646f774f7261636c653a20554e45585045435445445f54494d455f454c4150534544556e697377617056324c6962726172793a204944454e544943414c5f4144445245535345534669786564506f696e743a3a6672616374696f6e3a206469766973696f6e206279207a65726fa164736f6c6343000606000a536c6964696e6757696e646f774f7261636c653a2057494e444f575f4e4f545f4556454e4c595f444956495349424c45";

type ExampleSlidingWindowOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExampleSlidingWindowOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ExampleSlidingWindowOracle__factory extends ContractFactory {
  constructor(...args: ExampleSlidingWindowOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    factory_: AddressLike,
    windowSize_: BigNumberish,
    granularity_: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      factory_,
      windowSize_,
      granularity_,
      overrides || {}
    );
  }
  override deploy(
    factory_: AddressLike,
    windowSize_: BigNumberish,
    granularity_: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      factory_,
      windowSize_,
      granularity_,
      overrides || {}
    ) as Promise<
      ExampleSlidingWindowOracle & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): ExampleSlidingWindowOracle__factory {
    return super.connect(runner) as ExampleSlidingWindowOracle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExampleSlidingWindowOracleInterface {
    return new Interface(_abi) as ExampleSlidingWindowOracleInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ExampleSlidingWindowOracle {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ExampleSlidingWindowOracle;
  }
}
const { ethers } = require("hardhat");

async function main() {
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545/");
  const contract_addr = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
  const signer = await provider.getSigner(0);
  console.log("Got signer", signer);
  const abi = [
    {
      inputs: [
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
        {
          internalType: "string",
          name: "_date",
          type: "string",
        },
        {
          internalType: "string",
          name: "_vax",
          type: "string",
        },
        {
          internalType: "string",
          name: "_vax_type",
          type: "string",
        },
        {
          internalType: "bool",
          name: "_vaxed",
          type: "bool",
        },
      ],
      name: "addVax",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
        {
          internalType: "string",
          name: "_date",
          type: "string",
        },
        {
          internalType: "string",
          name: "_vax",
          type: "string",
        },
        {
          internalType: "string",
          name: "_vax_type",
          type: "string",
        },
        {
          internalType: "bool",
          name: "_vaxed",
          type: "bool",
        },
      ],
      name: "editVax",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "ping",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
      ],
      name: "toggleVax",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "vaxee",
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
      inputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      name: "vaxers",
      outputs: [
        {
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          internalType: "string",
          name: "date",
          type: "string",
        },
        {
          internalType: "string",
          name: "vax",
          type: "string",
        },
        {
          internalType: "string",
          name: "vax_type",
          type: "string",
        },
        {
          internalType: "bool",
          name: "vaxed",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  const myContract = await new ethers.Contract(contract_addr, abi, provider);
  console.log("Calling Contract:", await myContract.getAddress());
  const result = await myContract.ping();
  console.log("Result", result);

  console.log("Testing addVax");

  const myContractSigner = await new ethers.Contract(
    contract_addr,
    abi,
    signer
  );
  console.log("Got Contract For Signer");

  const add_vax = await myContractSigner.addVax(
    "test",
    Date.now().toString(),
    "0x-1023",
    "xadex",
    false
  );
  console.log("addVax was:", add_vax);
}

main();

const { ethers } = require("hardhat");

async function main() {
  var myContract = await ethers.getContractFactory("VaxCard");
  var myContract = await myContract.deploy();
  console.log("Contract deployed to:", myContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

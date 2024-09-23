## Run the following commands to initialize repo:

**get dependancies**
`npm init -y`

**get hardhat**
`npm install --save-dev hardhat`

**initialize hardhat**
(only if no hardhat config is present)
`npx hardhat init`

**install plugins**
`npm install --save-dev @nomicfoundation/hardhat-toolbox`
`npm install --save-dev @nomicfoundation/hardhat-ethers`

**add to `hardhat.config.js`**

`/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");
module.exports = {
  solidity: "0.8.27",
};`

## Initialize project and run command

**start node:**
`npx hardhat node`

**compile if needed:**
`npx hardhat compile`

**deploy SC:**
`npx hardhat run scripts/deploy.js --network localhost`

**call contract:**
`npx hardhat run scripts/call-contract.js --network localhost`

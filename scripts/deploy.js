// We require the Hardhat Runtime Environment explicitly here
const hre = require("hardhat");

async function main() {
  // Get the deployer's address
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Get the contract factory
  const SupplyChain = await hre.ethers.getContractFactory("SupplyChain");

  // Deploy the contract
  console.log("Deploying SupplyChain...");
  const supplyChain = await SupplyChain.deploy();

  // Wait for deployment to complete (ethers v6 syntax)
  await supplyChain.waitForDeployment();

  // Get the deployed contract address (ethers v6 syntax)
  const supplyChainAddress = await supplyChain.getAddress();

  console.log("SupplyChain deployed to:", supplyChainAddress);
  console.log("Contract owner (admin) is:", deployer.address);

  // Optional: Save the contract address to a file for frontend use
  const fs = require("fs");
  const contractsDir = __dirname + "/../frontend/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir, { recursive: true });
  }

  fs.writeFileSync(
    contractsDir + "/contract-address.json",
    JSON.stringify({ SupplyChain: supplyChainAddress }, undefined, 2)
  );

  // Save the ABI to a file for frontend use
  const artifact = await hre.artifacts.readArtifact("SupplyChain");
  fs.writeFileSync(
    contractsDir + "/SupplyChainABI.json",
    JSON.stringify(artifact.abi, undefined, 2)
  );

  console.log("ABI saved to frontend/contracts/SupplyChainABI.json");
}

// We recommend this pattern to be able to use async/await everywhere
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

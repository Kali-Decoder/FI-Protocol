const loayalityTokenRewardAddress ="0xBFff78BB02925E4D8671D0d90B2a6330fcAedd87";
const feedbackPlatformAddress = "0xaE068D19Dc79aD9052e8dC4b12ADc4831338d820";
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function deployContract() {
  const deployedContract = await ethers.deployContract(
    "FeedbackPlatform",
    [loayalityTokenRewardAddress]
  );
  console.log("[main] Waiting for Deployment...");
  await deployedContract.waitForDeployment();
  const address = await deployedContract.target;
  console.log("FeedbackPlatform Contract Address:", address);
  await sleep(30 * 1000);
  console.log("Done!!!");
  
}

deployContract()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

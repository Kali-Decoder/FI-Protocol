const loayalityTokenRewardAddress ="0xDD0570Edb234A1753e5aD3f8Be8fa7515cdA1C12";
const feedbackPlatformAddress = "";
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
  console.log("Feedback Platform Contract Address:", address);
  await sleep(30 * 1000);
  console.log("Done!!!");
  
}


deployContract()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

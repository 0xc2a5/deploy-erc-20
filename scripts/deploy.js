async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const weiAmount = (await deployer.provider.getBalance(deployer.address)).toString();

  console.log("Account balance:", (await ethers.formatEther(weiAmount)));

  const Token = await ethers.getContractFactory("MyToken");
  const token = await Token.deploy();

  console.log("Token address:", token.target);
  // 0x5d70e7119612fF8A645265360FDfFeC1D0B81e90
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

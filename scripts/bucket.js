async function main() {
    const token = await ethers.getContractAt("MyToken", process.env.TESTNET_ERC_20_ADDRESS);
    const amount = ethers.parseEther("10");

    await token.approve(process.env.TESTNET_BUCKET_ADDRESS, amount);
    console.log("token.approve");

    // https://sepolia.etherscan.io/address/0xd1e0fd0e2085ab88e22eb2d8c1266d7ae088d06e#code
    const bucket = await ethers.getContractAt("Bucket", process.env.TESTNET_BUCKET_ADDRESS);
    await bucket.drop(token.target, amount);
    console.log("bucket.drop");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

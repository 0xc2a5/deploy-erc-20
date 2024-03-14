async function main() {
    const token = await ethers.getContractAt("MyToken", process.env.TESTNET_ERC_20_ADDRESS);
    const amount = ethers.parseEther("1000");

    await token.transfer(process.env.TESTNET_RECIPIENT_ADDRESS, amount);
    console.log(`Transfer ${amount} to ${process.env.TESTNET_RECIPIENT_ADDRESS}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

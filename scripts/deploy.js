const hre = require('hardhat')

async function main() {
    const Contract = await hre.ethers.getContractFactory('KKStake');
    const token = await Contract.deploy();

    await token.waitForDeployment;

    console.log('成功部署合约：', token.target);
}

main().catch((error) => {
  console.log(error)
  process.exitCode = 1
})

const { task } = require("hardhat/config")

task("block-number", "Prints the current block number").setAction(
    // task("name of task", "description of task").setAction()
    async (taskArgs, hre) => {
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log("Current block number: " + blockNumber)
    }
    // const blockTask = async function () => {}
    // async function blockTask() {}
    // this 2 strings are the same! it's to way's how create functions in JavaScript
)
module.exports = {}

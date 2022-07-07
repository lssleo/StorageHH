require("@nomiclabs/hardhat-waffle")
require("dotenv").config()
require("./tasks/block-number.js")
require("hardhat-gas-reporter")
require("solidity-coverage")

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners()

    for (const account of accounts) {
        console.log(account.address)
    }
})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY
module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {},
        // kovan: {
        //     url: KOVAN_RPC_URL,
        //     accounts: [PRIVATE_KEY],
        //     chainId: 42,
        // },
    },
    solidity: "0.8.8",
    // etherscan: {
    //     apiKey: ETHERSCAN_API_KEY, || "key" // if this doesn't exist we can write alternative after ||
    // },
    gasReporter: {
        enabled: true,
        currency: "USD",
        outputFile: "gas-report.txt", // add to .gitignore
        noColors: true,
        coinmarketcap: COINMARKETCAP_API_KEY,
        // token: | can set token in which calculate gas
    },
}

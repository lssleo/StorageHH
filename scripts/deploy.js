// imports
const { ethers, run } = require("hardhat") // import "ethers", use require("hardhat")

// async main
async function main() {
    const simpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    )
    console.log("Deploying...")
    const simpleStorage = await simpleStorageFactory.deploy()
    await simpleStorage.deployed()
    console.log(`Deployed contract to: ${simpleStorage.address}`)
    // console.log(network.config)

    const currentValue = await simpleStorage.retrieve()
    console.log(`Current value is: ${currentValue}`)

    // Update the current value
    const transactionResponse = await simpleStorage.store(11)
    await transactionResponse.wait(1)
    const updatedValue = await simpleStorage.retrieve()
    console.log(`Updated value is: ${updatedValue}`)
}

// main
// always use this construction when use await and async
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })

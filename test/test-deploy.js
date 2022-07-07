const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

// desribe("Simple Storage", () => {})
describe("SimpleStorage", function () {
    // let SimpleStorage
    // let SimpleStorageFactory
    let simpleStorageFactory, simpleStorage
    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStorageFactory.deploy()
    })

    it("Should start with favorite number 0", async function () {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = "0"
        // assert
        // expect
        assert.equal(currentValue.toString(), expectedValue)
        // expect(currentValue.toString().to.equal(expectedValue)) | it's strings are the same
    })

    it("Should update when we call store", async function () {
        // if use it.only() when yarn hardhat run test , run only this test
        const expectedValue = "7"
        const transactionResponse = await simpleStorage.store(expectedValue)
        await transactionResponse.wait(1)

        const currentValue = await simpleStorage.retrieve()
    })

    it("Should work correctly with the people struct and array", async function () {
        const expectedPersonName = "Leonid"
        const expectedFavoriteNumber = "77"
        const transactionResponse = await simpleStorage.addPerson(
            expectedPersonName,
            expectedFavoriteNumber
        )
        await transactionResponse.wait(1)
        const { favoriteNumber, name } = await simpleStorage.people(0)
        // We could also do it like this
        // const person = await simpleStorage.people(0)
        // const favNumber = person.favoriteNumber
        // const pName = person.name
        assert.equal(name, expectedPersonName)
        assert.equal(favoriteNumber, expectedFavoriteNumber) // assert.equal(variable , expected variable) | test checking to match this values
    })
})

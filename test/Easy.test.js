const Easy = artifacts.require('./Easy.sol')

contract('Easy', (accounts) => {
  before(async () => {
    this.easy = await Easy.deployed()
  })

  it('deploys successfully', async () => {
    const address = await this.easy.address
    assert.notEqual(address, 0x0)
    assert.notEqual(address, '')
    assert.notEqual(address, null)
    assert.notEqual(address, undefined)
  })
})

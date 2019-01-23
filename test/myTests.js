const common = require('./common.js')
const MyVia = artifacts.require('./MyVia.sol')

let instances
contract('Testing MyVia', function (accounts) {
  it('initialized successfully', async () => {
    instances = await common.initialize(accounts[0], accounts, 1000)
  })

  it('MyVia deployed successfully', async () => {
    instances.MyVia = await MyVia.new(instances.Snowflake.address, { from: accounts[0] })
  })
})

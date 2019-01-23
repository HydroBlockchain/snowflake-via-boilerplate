// See <http://truffleframework.com/docs/advanced/configuration>
// to customize your Truffle configuration!

module.exports = {
  compilers: {
    solc: {
      version: '0.5.0',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
}

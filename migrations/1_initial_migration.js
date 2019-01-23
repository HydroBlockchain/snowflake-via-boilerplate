const SafeMath = artifacts.require('./_testing/zeppelin/math/SafeMath.sol')
const AddressSet = artifacts.require('./_testing/AddressSet/AddressSet.sol')
const StringUtils = artifacts.require('./_testing/ClientRaindrop/StringUtils.sol')

const HydroToken = artifacts.require('./_testing/HydroToken.sol')
const IdentityRegistry = artifacts.require('./_testing/IdentityRegistry.sol')
const Snowflake = artifacts.require('./_testing/Snowflake.sol')
const OldClientRaindrop = artifacts.require('./_testing/ClientRaindrop/OldClientRaindrop.sol')
const ClientRaindrop = artifacts.require('./_testing/ClientRaindrop/ClientRaindrop.sol')

// link libraries
module.exports = async function(deployer) {
  await deployer.deploy(SafeMath)
  await deployer.deploy(AddressSet)
  await deployer.deploy(StringUtils)

  deployer.link(SafeMath, HydroToken)
  deployer.link(SafeMath, Snowflake)
  deployer.link(AddressSet, IdentityRegistry)
  deployer.link(StringUtils, OldClientRaindrop)
  deployer.link(StringUtils, ClientRaindrop)
}

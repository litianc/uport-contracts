const IdentityFactory = artifacts.require('./IdentityFactory.sol')
const UportRegistry = artifacts.require('./UportRegistry.sol')

module.exports = function (deployer, network) {
  var previousPublishedVersion = 0;
  deployer.deploy(IdentityFactory)
  deployer.deploy(UportRegistry, previousPublishedVersion)
}

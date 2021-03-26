var Easy = artifacts.require("./Easy.sol");

module.exports = function(deployer) {
  deployer.deploy(
                  Easy,
                  [1, 2, 3]
                 );
};

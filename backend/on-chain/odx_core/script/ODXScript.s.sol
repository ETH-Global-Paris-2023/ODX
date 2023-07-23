   // SPDX-License-Identifier: UNLICENSED
   pragma solidity 0.8.18;
   import "forge-std/Script.sol";
   import "forge-std/Test.sol";
   import "../src/ODX.sol";
   contract ODXScript is Script {
       function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        ODX odxContract = new ODX();
        console.log("ODX contract address: ", address(odxContract));
        vm.stopBroadcast();
       }
   }

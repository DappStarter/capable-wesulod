require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note talk purpose install gloom suit giggle'; 
let testAccounts = [
"0x1a21c43c02e5c76ffd8e44ca72f578d70f6b5f3b3dcf4ef6f4f9745b5fb773f4",
"0xf6665b83d0a297a8e92577bed831c84b2932d14eba85a754daa5b5fdaec77751",
"0xf1b0c170f6f508d7b6d48c34644d4404ef262ebb764f491eae6486d258351c76",
"0x4f49aea194f214b40c07eaa1b67af46b38da837e5250cbd6078f1087d59b29ba",
"0xd1d33f01537f95ba02db3536ec99e21b69b52d6a317a955720a2e4fa94e8f88b",
"0x8b7d2acb6b599a15c8b3019dc11636f1b7c8e09ccc1ef831dc866973982f4b62",
"0x05aa4e690092f72db00e32b3a788b525f08b12e786fcdf698d79eb59e5bdb43a",
"0xdd62bd3a4024c87de0999cda88c576e98a464401c550efd3a2871ebdf0ec97a5",
"0x44b717ba166532acd597d65ae42720a916380a56342cfdb0818a266533bf8186",
"0xfa503cf35ac5a4d2a418e6de8f272793c456da050027c80275b04d11ca67b1a9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

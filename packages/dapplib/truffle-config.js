require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty bottom system blame develop remain clump gesture basket bubble series'; 
let testAccounts = [
"0x64b5fac185211847a4d6e9eae9814832a3c4383e7d26fda9cfcbfa44528e709e",
"0x46118776aeb6ce70096c707fa84549962f216a2261420fb4fc62743a38a88eba",
"0x86845ed1ad4dfed221f7b7483e37101dbf644772d8b082abc8a77478b0fc18e0",
"0x8344d9119a4b8bb0476ed47273bf1bcd2c2f0cd00ab8dcffd3a77bb6732709e9",
"0xdaac6dd8a6208eb88d6303e3ee7eef53d5c40446f20daf9260b603dec8ee20be",
"0x74af2f4ce421d3a2087f5dcbd0f618cf4ae26bc69b15ede8d796c71b82e3d9e3",
"0xbd2bd94d76a79197113bc6360cc1eaa22bac3c9f150a4084acf9f598a3f4906f",
"0x77b89e8a868823a578f23b796344f383199a2ac92dc0450f4595fb7409605b72",
"0xb6c859f4be78332fd65e5b74624ff71276d30043fbe33606d3aed85680a98012",
"0x90b9be18b7816e825b3d951e6ecc963380e5b5bca71a8dcc502bf6448364fa84"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
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
            version: '^0.8.0'
        }
    }
};


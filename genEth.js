var Web3;
try {
    Web3 = require('web3');
} catch {
    puke();
}

const web3 = new Web3();
var numAddresses = 10;
while (numAddresses-- > 0) {
    const newAccount = web3.eth.accounts.create();

    console.log(`Address:    ${newAccount.address}`);
    console.log(`PrivateKey: ${newAccount.privateKey}\n`);
}


function puke() {
    console.log('Looks like you need to run:\n\n\tnpm install\n\nGo do that, then come back and try again.\n');
    process.exit(1);
}
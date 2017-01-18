var storage = require('node-persist');
storage.initSync();

// create()
// --name
// --username
// --password

// get()
// --name

// account.name
// account.username
// account.password
function createAccount(account) {
  var accounts = storage.getItemSync('accounts');
  if (typeof accounts === 'undefined') {
    accounts = [];
  }
  accounts.push(account);
  storage.setItemSync('accounts', accounts);
  return account;
}

function getAccount(accountName) {
  var accounts = storage.getItemSync('accounts');
  var matchedAccount;
  accounts.forEach(function(account) {
    if (account.name === accountName) {
      matchedAccount = account;
    }
  });
  return matchedAccount;
}

// createAccount({
//   name: 'Twitter',
//   username: '@badkitty',
//   password: '123xyz'
// });

var twitterAccount = getAccount('Twitter');
console.log(twitterAccount);
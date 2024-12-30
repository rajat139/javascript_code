const accountId = 144445
let accountEmail = "Rajat@email.com"
var accountPassword = "12345"
accountCity = "Agra"
let accountState;

// accountId = 234512    // not allowed

accountEmail = "Rajat@google.com"
accountPassword = "123456"
accountCity = "Delhi"

console.log(accountId);

// Prefer not to use var
// Because of issue in block scope & functional scope 

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

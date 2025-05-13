console.log("Hello! Everyone")

const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2    // not allowed 

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


    // datatypes

"use strict";   // treat all js code as newer version
// alert(3 + 3)    // we are using nodejs not browser

console.log(3
    +3) // code readabiliity should be high

console.log("Hello")


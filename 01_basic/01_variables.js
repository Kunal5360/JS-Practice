const accountId = 16677;
let accountEmail = "Kunal@gmail.com";
var accountPassword = "456677";
accountCity = "Gondia";

// accountId = 5666; const can be changed 
console.log(accountId);

console.table([accountEmail, accountId, accountPassword, accountCity]);

/*
Prefer not to use var because of issue in block scope and functional scope.
*/
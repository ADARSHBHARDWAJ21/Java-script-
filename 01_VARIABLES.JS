const accountID = 1444553
let accountEmail = "adarsh21@gmail.com"
var accountPassword = "12345"
accountCity = "singrauli"
// accountID = 2 // not allowed (corrected variable name)
console.log(accountID) // corrected variable name

accountEmail = "gg@gmail.com"
accountPassword = "332233"
accountCity = "bengaluru"

console.table([accountID, accountEmail, accountPassword, accountCity]) // corrected variable name
// prefer not to use var because of issue in block scope and functional scope
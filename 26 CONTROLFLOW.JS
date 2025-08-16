// IF// ELSE
const isUserloggedIn = true
const temperature = 60

if ( temperature === 41){
    console.log("less then 50");
}else {
    console.log("temperature is greater than 50");
}
console.log("Execute")

// const score = 101
// if (score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

//  console.log(`User power: ${power}`);

const balance = 900
//if (balance > 500) console.log("test"),console.log("test2"); not a good way to write code in company

//nesting++++++++++++++++++++++++++++++++++++++++++++
if (balance < 500){
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
}
else if (balance < 900){
    console.log("less then 750")

 }else{
    console.log("less then 1200")
}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = false
if (userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}
if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");

}
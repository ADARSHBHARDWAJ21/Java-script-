<<<<<<< HEAD
const name = "hitesh";
const repoCount = 50;

// Fixed: Use backticks (`) for template literals
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc');
console.log(gameName[0]); // "h"
console.log(gameName.__proto__); // String prototype
console.log(gameName.toUpperCase()); // "HITESH-HC"
console.log(gameName.charAt(2)); // "t"
console.log(gameName.indexOf('t')); // 2

const newString = gameName.substring(0, 4);
console.log(newString); // "hite"

const anotherString = gameName.slice(-8, 4);
console.log(anotherString); // "ite" (negative index starts from end)

const newStringone = "    hitesh    ";
console.log(newStringone); // "    hitesh    "
console.log(newStringone.trim()); // "hitesh"
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '_'))
=======
const name = "hitesh";
const repoCount = 50;

// Fixed: Use backticks (`) for template literals
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc');
console.log(gameName[0]); // "h"
console.log(gameName.__proto__); // String prototype
console.log(gameName.toUpperCase()); // "HITESH-HC"
console.log(gameName.charAt(2)); // "t"
console.log(gameName.indexOf('t')); // 2

const newString = gameName.substring(0, 4);
console.log(newString); // "hite"

const anotherString = gameName.slice(-8, 4);
console.log(anotherString); // "ite" (negative index starts from end)

const newStringone = "    hitesh    ";
console.log(newStringone); // "    hitesh    "
console.log(newStringone.trim()); // "hitesh"
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '_'))
>>>>>>> 8e701270f59492e89656cfe1befa8bad6611f473
url.includes('hitesh')
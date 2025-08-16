// Variable declaration
const name = "hitesh";
const repoCount = 50;

// Fixed: Template literals require backticks (`) instead of single quotes (').
console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);

console.log('--- String Methods ---');

// It's more common to create strings as primitives: const gameName = 'hitesh-hc';
// But creating a String object with `new` is also valid.
const gameName = new String('hitesh-hc');

console.log(gameName[0]); // "h"
console.log(gameName.toUpperCase()); // "HITESH-HC"
console.log(gameName.charAt(2)); // "t"
console.log(gameName.indexOf('t')); // 2

/*
 .substring() extracts characters between two indices.
 It does not accept negative indices.
*/
const newString = gameName.substring(0, 4); // Extracts characters from index 0 up to (but not including) 4
console.log(newString); // "hite"

/*
 .slice() is similar to substring but can accept negative indices,
 which count from the end of the string.
*/
const anotherString = gameName.slice(-8, 4); // Starts at 8th char from the end (index 1) and ends at index 4
console.log(anotherString); // "ite"

// .trim() removes whitespace from both ends of a string.
const newStringOne = "   hitesh   ";
console.log(newStringOne); // "   hitesh   "
console.log(newStringOne.trim()); // "hitesh"

const url = "https://hitesh.com/hitesh%20choudhary";

// .replace() finds a substring and replaces it.
// Note: This replaces only the *first* occurrence.
console.log(url.replace('%20', '-')); // "https://hitesh.com/hitesh-choudhary"

// .includes() checks if a string contains a specified substring and returns true or false.
console.log(url.includes('hitesh')); // true
console.log(url.includes('sundar')); // false+++
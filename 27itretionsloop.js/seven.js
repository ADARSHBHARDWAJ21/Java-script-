const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// First operation
const newNums1 = myNumbers.map((num) => num + 10);
console.log("First result (adding 10):", newNums1); // Output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// Second (chained) operation
const newNums2 = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

console.log("Second result (chained methods):", newNums2); // Output: [41, 51, 61, 71, 81, 91, 101]
const myNums = [1, 2, 3]
const myTotal = myNums.reduce(function (acc, currval) {
    return acc + currval
},  0)
console.log(myTotal);
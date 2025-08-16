// Dates
let myDate = new Date();

console.log(myDate.toString()); // Full date string with timezone (e.g., "Fri May 30 2025 22:56:08 GMT+0530 (IST)")
console.log(myDate.toDateString()); // Date only (e.g., "Fri May 30 2025")
console.log(myDate.toLocaleString()); // Localized date and time (e.g., "5/30/2025, 10:56:08 PM")
console.log(typeof myDate);
//let myCreatedDate = new Date(2023-0-23)

let myTimeStamp = Date.now();
console.log(myTimeStamp); // Current timestamp in milliseconds

let myCreatedDate = new Date();
console.log(myCreatedDate.getTime()); // Timestamp of myCreatedDate

console.log(Date.now()); // Current timestamp

let currentDate = new Date();
console.log(currentDate); // Current date and time
console.log(currentDate.getMonth() + 1); // Current month (1-12)
console.log(currentDate.getDay()); // Current day of week (0-6, Sunday=0)
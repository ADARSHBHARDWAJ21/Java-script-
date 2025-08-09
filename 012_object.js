<<<<<<< HEAD
// 012_objectjs > [@] jsUser
// singleton
// object literals

const mySym = Symbol("key1");

const jsUser = {
    name: "Adarsh",
    "full name": "Adarsh bhardwaj",
    [mySym]: "mykey1",  // Corrected symbol usage
    email: "adarsh@google.com",
    isLoggedIn: false,   // Removed invalid $ character
    lastLoginDays: ["Monday", "Saturday"]
};

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);  // Corrected symbol access
console.log(typeof jsUser[mySym]);  // Corrected symbol access
jsUser.email = "Adarsh@chatgpt.com"
//Object.freeze(jsUser) /// now my email cannot be updated use to freeze LATEST EMAIL
jsUser.email  = "ADARSH@MICROSOFT.COM"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");

}
jsUser.greeting = function() {
    console.log("Hello JS user");
};

jsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);  // Corrected template literal and property access
};

console.log(jsUser.greeting());      // Corrected function call
=======
// 012_objectjs > [@] jsUser
// singleton
// object literals

const mySym = Symbol("key1");

const jsUser = {
    name: "Adarsh",
    "full name": "Adarsh bhardwaj",
    [mySym]: "mykey1",  // Corrected symbol usage
    email: "adarsh@google.com",
    isLoggedIn: false,   // Removed invalid $ character
    lastLoginDays: ["Monday", "Saturday"]
};

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);  // Corrected symbol access
console.log(typeof jsUser[mySym]);  // Corrected symbol access
jsUser.email = "Adarsh@chatgpt.com"
//Object.freeze(jsUser) /// now my email cannot be updated use to freeze LATEST EMAIL
jsUser.email  = "ADARSH@MICROSOFT.COM"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");

}
jsUser.greeting = function() {
    console.log("Hello JS user");
};

jsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);  // Corrected template literal and property access
};

console.log(jsUser.greeting());      // Corrected function call
>>>>>>> 8e701270f59492e89656cfe1befa8bad6611f473
console.log(jsUser.greetingTwo());   // Removed incorrect ".User" reference
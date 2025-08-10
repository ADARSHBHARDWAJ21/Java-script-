const user = {
    username: "Adarsh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "darsh"
// user.welcomeMessage()
  
// function chai(){
//     let username ="Adarsh"
//     console.log(this.username);

// }
// chai()
const chai = () =>{            //arrow function =>
let username = "Adarsh"
console.log(this);
}  

///ARROW FUNCTION
// ARROW FUNCTION
//const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "Adarsh"})
console.log(addTwo(3, 4));

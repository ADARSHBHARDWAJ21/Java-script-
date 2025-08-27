const user ={
    username: "Adarsh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

//console.log(user.username);
//console.log(user.getUserDetails());
  //  console.log(this);


//  counstructor function
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome${thid.username}`);
    }

    return this
}
const userOne = new User("Adarsh", 12 ,true)
const userTwo = new User("darsh", 129 ,false)
console.log(userOne);
console.log(userTwo); 
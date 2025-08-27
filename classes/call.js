function SetUsername(username) {
    // complex DB CALLS
    this.username = username;
    console.log()
}

function createUser(username, email, password) {
    SetUsername.call(this, username); // ✅ use .call() to bind "this"
    SetUsername.call(username)

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);

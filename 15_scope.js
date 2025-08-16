
let a =300

if(true)
{let a = 10 // global scope
const b = 20
console.log("INNER: " , a); //block scope
}


//scope
//console.log(a);
//console.log(b);
console.log(a);


// block scope area under {}
// global scope area outsude{}
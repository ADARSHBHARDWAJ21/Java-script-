//for loop

for (let i = 0; i <= 10;  i++) {
    const element = i;
    if (element == 5){
        console.log("5 is best number");
    }
    console.log(element);
    
}
let myArray = ["flash" , "batman" , "superman" ]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++){
    const element = myArray[index];
    console.log(element);

}
//BREAK AND CONTINUE
 for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log(`Detected 5`);
        //break
        continue
    }
    console.log(`value of i is ${index}`);
    
 }

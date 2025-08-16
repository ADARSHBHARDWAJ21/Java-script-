// Javascript execution context
//{}  --> Global EC
// global execution context
//function execution context
//eval execution context
let val1= 10
let val2 = 5
function addNum(num1 , num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)
//code execution of above code
// step 1 global execution --> Allocated in this
// step 2 Memory phase --> ALL VARIABLES ARE KEPT 
// VAL 1 -- UNDEFINED VAL 2 -- UNDEFINED ADD NUM -- DEFINATION
// RESULT 1 , RESULT 2 - UNDEFINED
// STEP  3 EXECUTION PHASE
// VAL 1 <-- 10 , VAL 2 <--5
//ADD NUM --> NEW VARIABLE ENVIROMENT + EXECUTION THREAD
                                             
// immediately invoked Function Expression
(function chai(){
    // NAMED IIFE
    console.log(`DB CONNECTED`);
})();


(  (name) =>  {
    console.log(`DB CONNECTED TWO ${name}`); // UNNAMED IIFE

})('adarsh')
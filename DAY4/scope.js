// scope determines where the variables and functions are accessible in the code...

// global scope...Variables declares outside of the functions are global and can be acceses anywhere 

// function scope... variables declares inside the function can only be accessed within that function




// const name = "venkat"; //global

// function one() {
//     console.log(name)
// }


// function two() {
//     console.log(name)
// }
// one(); //function call
// two(); //function call
// console.log(name); //accessible 




// function welcome() {
//     var name = "venkat";
//     var name = "ram"
//     console.log(name); //
// }
// // console.log(name); //
// welcome();
// console.log(name); 


// block scope (let and const) variables declares with let or const inside the block {} are only accessible inside that block

if(true){
    let a = 10;
    const b = 20;
    // console.log(a, b)
}
// console.log(a, b)


// lexical scope...a function can access variables from its parent scope...

function outer() {
    let name = "venkat";
    function inner() {
        console.log(name); //we are trying to access the var name which is not present in inneer 
    }
    inner()
}
outer()
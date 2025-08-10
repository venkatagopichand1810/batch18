// function declations
//function expressions
//arrow functions
//anonymous functions
//IIFE
//hof


//normal function 
// function greet(name){
//     return "Hello, " + name
// };

// console.log(greet("venkat"))

//arrow function
// const greet = (name) => "Hello, " + name;

// console.log(greet("venkat"))


// function with multiple parameters

//normal function 
// function add(a, b){
//     return a + b
// }
// console.log(add(10, 20))

// const add = (a, b) => {
//     return a + b
// }
// console.log(add(10, 20))


// function as a callback...map

// const numbers = [1, 2, 3, 4, 5];

// // normal function 
// const doubled1 = numbers.map(function(num) {
//     return num * 2
// })

// // arrow function
// const doubled2 = numbers.map(num => num * 2 )
// console.log(doubled1)
// console.log(doubled2)

// function as a filter

// const ages = [18, 15, 20, 16];

// //normal function 
// const adults1 = ages.filter(function(age) {
//     return age >= 18
// })


// //arrow function 
// const adults2= ages.filter(age => age >= 18)

// console.log(adults1)
// console.log(adults2)


// // function in settimeout

// //normal function 
// setTimeout(function() {
//     console.log("normal function ")
// }, 1000);


// // arrow function 
// setTimeout(() => {
//     console.log("arrow function ")
// }, 1000);


// // IIFE(immediately invoked function)

// (function() {
//     console.log("IIFE normal function")
// })();


// (() => {
//     console.log("IIFE arrow function")
// })();


// // for each
// const mobiles = ["iphone", "OPPO", "VIVO"];

// // normal function 
// mobiles.forEach(function(mobile) {
//     console.log(mobile)
// })


// //arrow function
// mobiles.forEach(mobile => console.log(mobile))



// "this" in javascript

// "this" refers to the objeact that is executing the function

// in normal function, this is dynamic.. it depends on how the function is called

//in arrow function, this is lexical

//global scope, function scope, block scope, lexical scope


//in terms of arrow function, "this" is lexical..it is inherited from the surrounding scope, not from the object itself



const person = {
    name: "Venkat",

    // normal function 
    welcome: function() {
        console.log("Hello, " + this.name)
    },

    // arrow function
    welcomearrow: function() {
        setTimeout(() => {
            console.log("Hello, " + this.name); //referes to the window object
        })
       
    }

}

person.welcome()
person.welcomearrow();

//  to fix this problem, arrow function inside the regular functionn
// function expression is also a function defined inside the expression basically we are going to assgined to the variable.

// const funName = function() {  } 

// anonymous function expression, it can be also the named 

// const welcome = function() {
//     console.log("hi hello")
// }
// welcome();


// const add = function(a, b) {
//     console.log("hi hello venkat")
//     return a + b;
   
// }
// console.log(add(10, 40));


// const substract = function difference(a, b) {
//     return a - b
// }
// console.log(substract(10, 40));


// func declaration vs fun expression


// hihello();
// function hihello(){
//     console.log("func declaration ")
// }




// hihello1();
// var hihello1 = function(){
//     console.log("fun expression ")
// }
// hihello1();

// hoisting in javascript....15 years...function declartions and variables declartions will move to top of contianing scope


// console.log(a); // undefined
// var a = 10;
// console.log(a); //10


// var a;
// console.log(a)
// a = 10;
// console.log(a); //10

// yokesh1();

// var yokesh1 = function(){
//     let x = 100;
//     console.log(x)
// }



// IIFE....immediately invoked function expression (IIFE)

(function(){
    console.log("hi hello")
})();


(function(){
    const username = "venkat"
    console.log(`welcome, ${username}`)
})();


(function() {
    console.log("app is starting.....")

    const appConfig = {
        apiUrl: "https://api.somthing.com"
    };
    console.log(appConfig)
})();



(async function() {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(apiUrl);
    const posts = await response.json()
    console.log(posts)

})();
console.log(posts);
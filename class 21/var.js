// to declare the variables in javascript we can use var, let or const

//var

// 1) scope: function scoped
// 2) we can redeclare
// 3) hoisted


// var is the function scope, it is accessible anywhere inside the function, even outside of the if block
// var message = 10; //global scope
// function welcome() {
//     var message = 100;
//     if(true){
//         var message = 100;  //function scope
//         var message = 1000; //function scope
//     }
//     if(true){
//         console.log(message);
//     }
//     console.log("venkat", message); //100
// } //function closed

// var message = 100; //out of the funcion

// console.log(message)
// welcome();


// 10 -> 100 -> 1000

// 10 -> 100



// var name = "venkat"; //global scope

// function welcome(){
//     var name = "yokesh" //function scope
//     if(true){
//         var name = "ashuthosh";
//     }
//     console.log(name)
// } //function closed here
// var name = "ashuthosh";
// console.log(name);

// welcome();


// var is hoisted to top of its scope and intialzied with undefined..function declarations and variable declarations will be hoisted

// console.log(name)
// var name = "venkat";
// console.log(name)

//behind screens
// var name; 
// console.log(name)
// name = "venkat";
// console.log(name)

// var name; //hoisted moving the delcations to top of the scope
// console.log(name)
// name = "harshaaa"


// function declatations
// name()

// function name() {
//     console.log("venkat")
// }



//function expresssion
// const name = function(){
//     console.log("venkat")
// }

// name();


//variable declations and function declrations will move to top of the scope....hoisting...
// var value; //delcartion the variable ...
// console.log(value)
// value = 100; //initializton....assigning the value to the variable
// console.log(value)


// variable without any declarations (implicitly global)

// function hello(){
//     x = 10;  //global scope
//     console.log(x)
// }
// hello();
// console.log(x);

// var a =1, b = 2, c =3;


// var a = 1;
// var b = 2;
// var c = 3;


// var a = 1, 
//     b = 2, 
//     c = 3;

// var a = "10"; 
// var b = 100;
// var c = 1000;
// console.log(a + b + c); //1000100

//where ever the number declared as the string, rest of the things will be concatinated

console.log("10" + 20 + 30 + "40" + "50")

// var firstname = "venkat"
// var lastname = "chandu"
// var fullname = firstname + lastname;
// console.log(fullname)



// reassinging is possible with var

var x = 100;
x = "venkat";
console.log(x)
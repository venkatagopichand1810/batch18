// in javascript variables are used to store and manipulate the data..
// A variable acts as container for value....we can store the value into the variable 

// Declaring variables... we can declare the variables using

// 1) let
// 2) var
// 3) const

// delclaration and assignment

var a = 10; //we are declaring the variable called "a" using var and we are assgining the value 10
var b = 20;
console.log( a + b)

var x = 10; 
var y = 20; 
var z = 100;
var w = x + y + z;
console.log(w);


// in var we can do reassingment..reassginment is possible in terms of var..

var name = "venkat";
console.log(name);

name = "ram"; //reassigning the value
console.log(name)



// redeclaring the variable is also possible in case of var

var age = 100;
console.log(age)
var age = 45; //redeclaring the same variable
console.log(age)


// global scope in terms of var

var globalVar = 10000; //global variable

function something() { //this is the function 
    console.log(globalVar); //1000
}
something();
console.log(globalVar); //1000


//function scope 
function funScope(){
    var mesg = "venkat"; //inside the function
    console.log(mesg)
}
// console.log(mesg); //
funScope(); //function calling





// var value1 = 100;
// console.log(value1); //100
// if(true){
//     var value1 = 200;
//     console.log(value1);//200
// }
// if(true){
//     var value1 = 500;
//     console.log(value1);//500
// }
// console.log(value1); //500



var player = "venkat";
console.log(player); //venkat
if(true){
    var player = "dhoni"; 
    console.log(player); //dhoni
}
console.log(player)//dhoni

// var is the function/global...even
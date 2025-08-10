// primitive data types are copy by value...immutable we can't able to change the data..

// copy of value
//when we assign a value of the primitive data type(eg.. string, number, ...) to another variable.
//then the value is copied..but both the variables hold the seperate copies of the value.

//changing one variable does not affact the other one.

let a = 10; //primitive 
let b = a; //copy by value..(shallow copy)

console.log(a); //10
console.log(b); //10

// changing the value of b

b = 100;
console.log(a); //10 (unchanged)
console.log(b); //100


let str1 = "hello";
let str2 = str1;

console.log(str1, str2);

str2 = "venkat";
console.log(str1); //hello
console.log(str2); //venkat

// copy by refernce....when we assign the value of ref type to another varaiable..
//a ref(or pointer) to the same memory location is copied...
//both the variables point to the same object in memory...

//changes made to one variable will afface the other ...because they share the same referencess...


const obj1 = {name: "venkat"}; //object
const obj2 = obj1; //copy the refrence
 
console.log(obj1, obj2)

// const obj1 = {name: "rama"}; //this is not possbile
obj2.name = "rama"; //modifying the obj2

console.log(obj1);//rama
console.log(obj2); //rama
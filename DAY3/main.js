// from 1 to 10...

for(let i = 1; i<=5; i++){
    console.log(i)
}

// 1) let i = 1... 1 <=5...it will the block..console.log(i = 1) ..1
//2) let i = 2 .... 2 <=5..2..
//3) let i =3 ....


// iterate over the array...

// const mobiles = ["LG 0 ", "oppp 1", "vivo 2"];
// // console.log(mobiles[0])
// // console.log(mobiles[2])
// // console.log(mobiles.length)
// for(let i =0; i < mobiles.length; i++){
//     console.log(mobiles[i])
// }

// 1) i = 0; 0 < 3...mobiles[0]...LG 

// break 
// Terminates the loop entirely and the control immediately exits from the loop


// and continue..skips the current iteration of the loop and moves to next iteration

// for(let i =1; i<=5; i++){
//     if(i === 3){
//         break; //stops the loop
//     }
//     console.log(i)
// }

//  1 ===3....1
// 2 === 3 ...2
// 3 === 3..inside the loop


// continue


// for(let i =1; i<=5; i++){
//     if(i === 3){
//         continue; //skips the iteration
//     }
//     console.log(i)
// }


//  for of..... and for in 

// for... of loop... it is used to iterate iterable ojbects...array, strings...

// syntax... for(variable of iterable)


// iterating over an array

// const mobiles = ["BPL", "OPPO", "VIVO"];
// for(let mobile of mobiles){
//     console.log(mobile)
// }

//mobiles = ["BPL", "OPPO", "VIVO"]

// let mobile of "BPL", "OPPO", "VIVO"
// // BPL
// // OPPO
// // OPPO

// iterating over the string..

// let name = "venkat"; //
// for(let something of name){
//     console.log(something)
// }


// array of objects....

// const students = [
//     {name: "ram", age: 50, marks: 100},
//     {name: "john", age: 30, marks: 90},
//     {name: "jake", age: 20, marks: 70},
// ];

// for(let student of students){
//     console.log(`${student.name} and his age is ${student.age} and marks is ${student.marks}` )
// }


// for in loop..iterates over the keys (properties) of an object

// iterating over an object

// const person = {
//     name: "ram", //key = name - value/property = ram
//     age: 55,
//     city: "bangalore"
// }
// for(let key in person) {
//     console.log(`${key} : ${person[key]}`)
// }





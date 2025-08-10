// if...else..executes the block of code if the condition is true...and if false then the another block of code is going to execute...


// if(condition){
//     //code  
// } else {
//     //code
// }

// let age = 16;

// if(age >= 18){
//     console.log("you are eligible to vote")
// } else {
//     console.log("you are not eligible")
// }

// let marks = 85;
// if(marks >= 90){
//     console.log("First")
// } else if(marks >=80){
//     console.log("second")
// } else if(marks >= 70){
//      console.log("third")
// } else {
//     console.log("fourth")
// }

// nested if else....

// let age = 10;
// let hasLicense = true;

// if(age >=18){
//     if(hasLicense){
//         console.log("he is eligible to drive ")
//     } else {
//         console.log("he is not having the license")
//     }
// } else {
//     console.log("you are too young")
// }

let username = "admin";
let password = "123456";

if(username === "admin" ) {
    if(password === '123456') {
        console.log("welcome admin you have all rights")
    } else {
        console.log("incorrect pwd")
    }
} else {
    console.log("user is not recognized")
}
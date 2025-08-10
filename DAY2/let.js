// in terms of let...

// declaration and reassignment is possible in let 

// let name = "venkat";
// console.log(name);//venkat
// // reasgining the value
// name = "ram";
// console.log(name); //ram


// redeclaration is not possible in case of let.. let is the block scope 

// let age = 20;
// console.log(age);

// let age = 40; 
// console.log(age);

//let is the block scope

let name = "venkat";
console.log(name);//venkat
if(true){
    let name = "ram";
    console.log(name); //ram
}
console.log(name); //venkat

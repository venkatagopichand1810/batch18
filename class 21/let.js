// let....block scope meaning it only exists inside { }


// function blockScope() {
//         if(true){
//             let name = "venkat";
//             console.log("inside the block", name)
//         }
//         console.log("outside the block", name)
// }

// blockScope();




// for let....reassignment is allowed  but redeclration is not allowed

// let name = "venkat";
// let name = "ramaa";
// console.log(name)

// let name = "venkat"; //venkat
// name = "rama"; //reassignment
// console.log(name)

//we can reassign the let variable, but cannot redeclare it in the same scope.



// declaration and init -> let value = 100

// let value = 100; //declaring the variable (value) and assign the value (100)
// // let value = 200; //redclaration  (not possible)
// value = 200; //reassignment (possible)
// console.log(value)


// { 

//     let a = 1;

//     {
//         let a = 2;
//         console.log("inner", a) //2
//     }
//      console.log("outer", a) //1
// }


// let count = 10;
// function hello(){
//     let count = 50; 
//     console.log(count); //50
// }
// hello();
// console.log(count) ; //10


// function is a block of statements that can executed togethter,, for reusable purpose


// function a() {
//     let a = 100;
//     function b() {
//         console.log(a)
//     }
//     b()
// }
// a()
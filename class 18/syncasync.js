// console.log("A")
// console.log("B")

// // fun dec

// //  ---> you take your time how much ever u want let me go check other operations
//     setTimeout(() => {
//         let sum = 0;
//         for(let i =1; i<=10000000000000000000000; i++){
//             sum += i;
//         }
    
//         console.log("sum", sum); //display sum
//     }, 0)


// console.log("C")
// console.log("D")
// console.log("E")

// console.log("C")
// console.log("D")
// console.log("E")

// console.log("C")
// console.log("D")
// console.log("E")

// console.log("C")
// console.log("D")
// console.log("E")

// // javascript is the single threaded .....sync



console.log("hi")

setTimeout(() => {
    console.log("i am in 1st timeout")
}, 0)
setTimeout(() => {
    console.log("i am in 2 timeout")
}, 1000)

setTimeout(() => {
    console.log("i am in 3 timeout")
}, 3000)

setTimeout(() => {
    console.log("i am in 6 timeout")
}, 2000)

setTimeout(() => {
    console.log("i am in 7 timeout")
}, 5000)

setTimeout(() => {
    console.log("i am in 7 timeout")
}, 6000)

console.log("hello")


//event loop

// 1) call stack ...

// Call stack keeps track the function calls, 
// when the function is called it is pushed to the stack
// when the function completes, it is popped out from the stack

// 2) web apis ...setTimeout, fetch

// 3) callback queue... async task setTimeout, queue 


// 5) event loop
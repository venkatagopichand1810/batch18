// function with parameters..
// function add(a, b){
//     return a + b
// }

// console.log(add(10, 20));
// console.log(add(20, 20));
// console.log(add(50, 20, 90, 100)); //if we don't how many values we are going get.... 


// default parameters

// function muliply(a, b=5){
//     return a * b
// }
// console.log(muliply(4));
// console.log(muliply(4, 10));


// function welcome(name = "venkat"){
//     console.log(`hello ${name}`)

// }
// console.log(welcome(undefined)); //hello venkat
// console.log(welcome(null)); // hello  (overriders default value with null)
// console.log(welcome()); //hello venkat


// function welcome(){
//     console.log(arguments.length)
//     console.log(arguments[4])
// }

// welcome(1, 2, 3, true, "venkat", "call me")

// function sum(){
//     let total = 0;
//     for(let i = 0; i< arguments.length; i++){
//         total += arguments[i]
//     }
//     return total
// }

// console.log(sum(1, 2, 3, 4, 5))
// console.log(sum(1, 2, 3, 4, 5, 10, 20))
// console.log(sum(1, 10, 20))


// es6 rest operator...
function add(...args){
    return args.reduce((acc, curr) => acc + curr, 1000000)

}
console.log(add(1, 2, 3))
// console.log(add(1, 2, 100000000))

// here   args.reduce((acc, curr) => acc + curr, 4)

// 0 is the intitial value
//acc = initial value
//current = 1

// 0 + 1 = 1 ,, acc + curr, 1)
// 1 + 2 = 3... 3
// 3 + 3 = 6





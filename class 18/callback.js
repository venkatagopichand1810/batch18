// A callback is a function that is passes as an argument to another function


// function add(a, b) {
//     return a + b;

// }
// console.log(add(10, 30))



function calculate(a, b, venkat){
    return venkat(a, b)
}


function add(x, y) {
    return x + y;
}

function substract(x, y) {
    return x - y;
}

function muliply(x, y) {
    return x * y;
}



console.log(calculate(10, 30, add));
console.log(calculate(10, 30, substract));
console.log(calculate(10, 30, muliply));



// function add(a, b){
//     return a + b
// }

// function substract(a, b){
//     return a - b
// }

// function muliply(a, b){
//     return a * b
// }


// console.log(add(10, 20))
// console.log(substract(20, 10))
// console.log(muliply(20, 10))

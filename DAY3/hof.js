function applySomething(a, b, operation){
    return operation(a, b)

}

function add(a, b){
    return a + b
}

// console.log(add(10, 20));

console.log(applySomething(10, 20, add))
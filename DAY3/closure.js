function outerFunction(){
    let message = "venkat";

    // inner function
    function innerFunction() {
        console.log(message) // accessing the message of the outerfunction inside the innerfunction
    }
    return innerFunction;
}

const innerfunction = outerFunction(); // we are creating the closure

innerfunction()


// currying...a function in js takes mukple argumetn at one time , each time is is called it returns the new function that the takes the next arg


function add(a, b){
    return a + b;
}

// curred version for addition
function curryAdd(a){
    return function(b){
        return a + b
    }
}

const add1 = curryAdd(10);
console.log(add1(20))
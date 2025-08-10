// console.log(name); //undefined.
// var name = "venkat";
// console.log(name) //venkat



// behind scenes how the javascript interprets i

// var name; //hoisted the declarations..
// console.log(name); //undefined
// name = "venkat"; //init
// console.log(name)

// console.log(name)
// let name = "venkat";
// console.log(name);

// let, var, const are hoisted they will "TDZ(Temporal dead zone)" untill they declared



// function declartions are hoisted


// function welcome() {
//     console.log("welcome javascript class")
// }

// welcome(); //we are calling function


// welcome(); // //we are calling function

// function welcome() {
//     console.log("welcome javascript class")
// }



// function expressions 

// welcome();

// var welcome = function() {
//     console.log("welcome javascript class")
// }



// in real projects....utility functions...



// getuserData









function getuserData(userid){
    return `user id ${userid}`
}
console.log(getuserData(1))


function getuserData1(userid){
    return `user id ${userid}`
}
console.log(getuserData1(2))

function getuserData2(userid){
    return `user id ${userid}`
}
console.log(getuserData2(3))

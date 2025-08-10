// function add(a, b){
//     return a + b;
// }
// console.log(add(10, 40))


// arrow function

// const add = (a, b) => {
//     return a + b
// }
// console.log(add(10, 400))

// if we have only one statement in arrow functions we can remove the return statement


// const add = (a, b) => a + b;
// console.log(add(10, 400))

// scoping....lexical scope



// arrow function () => {} ....this behaviour...inherits this from the enclosing scope....no arguments 


//normal function function add () => {}...having own this ..arguments


//this is normal function

// const mobile = {
//     name: "iphone",
//     mobileInfo : function() {
//         console.log(this.name); //this refers to mobile object
//     }
// }

// mobile.mobileInfo();


//lexical scope arrow function this
// var name = "bpl"
// const mobile = {
//     name: "iphone",
//     mobileInfo : function() {
//         const venkat = this;
//         setTimeout(() => {
//             console.log(venkat.name);
//         })
//  //in this it will not refer to the mobile object...it is going global object..if it contains..
//     }
// }
// // const mobileBind = mobile.mobileInfo.bind(mobile)
// mobile.mobileInfo();

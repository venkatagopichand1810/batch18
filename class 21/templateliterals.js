// 1) Normal way (using string concatentation)
//2) Template literals (backticks and ${})


// normal way
// let name = "venkat";
// let message = "Hello ," + name;
// console.log(message)

// template literals
// let name = "venkat";
// let message = `Hello ,${name}`;
// console.log(message)


// let message = "Today is saturday \n" +
//                 " and we have offers";
// console.log(message)


// let message = `Today is saturday 
//                and we have offers`;
// console.log(message)


// let a = 5;
// let b = 10;
// // let sum = "sum is " + (a + b);
// let sum = `sum is ${a + b}`;
// console.log(sum)

// function call inside the string

// function welcome() {
//     return "Good Afternoon"
// }

// // let message = "Message " + welcome();
// let message = `Message ${welcome()}`
// console.log(message)

// let person = {name: "venkat", age: 30};
// // let message = "Name: " + person.name + ", Age: " + person.age;
// let message = `Name: ${person.name}, Age: ${person.age}`
// console.log(message)


// const isLoggedIn = true;
// // let message = "Status: " + (isLoggedIn ? "Online" : "Offline")
// let message = `Status ${isLoggedIn === false ? "Online" : "Offline"}`
// console.log(message)


let name = "Venkat";
let emailContent = `
<h1>Welcome, ${name} </h1>
<p>Thanks for sigining up, welcome
`;

document.body.innerHTML = emailContent;
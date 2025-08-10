// pending, fulfilled and rejected

//pending....the intial state, before the promise resolved or rejectd

//resolved...fulfilled....the operation completed successfully, will get ticket is book

//rejectd.. the operation is failed.. error..i am busy.. he will reject the movie new Promise


// let promise = new Promise(function(resolve, reject){
//     let letsGo = false;

//     if(letsGo) {
//         resolve("going to movieeeee hurrryyyyyyyyyyyyyyyyyyyyy")
//     } else {
//         reject("sorry will go some time later")
//     }
// })
// // .then finall result will be handling .then in promise
// promise
// .then(function(result){ //success state resolve
//     console.log(result)
// })
// .catch(function(error){ //error state
//     console.log(error)
// })



// let promise = new Promise(function(resolve, reject){
//     let letsGo = true;

//     if(letsGo) {
//         resolve("going to movieeeee hurrryyyyyyyyyyyyyyyyyyyyy");
//         resolve("going to anoterh movieeeee hurrryyyyyyyyyyyyyyyyyyyyy hurrryyyyyyyyyyyyyyyyyyyyy")
//     } else {
//         reject("sorry will go some time later")
//         reject("sorry will go some time later later")
//     }
// })
// // .then finall result will be handling .then in promise
// promise
// .then(function(result){ //success state resolve
//     console.log(result)
// })
// .catch(function(error){ //error state
//     console.log(error)
// })


// let p1 = Promise.resolve("movie")
// let p2 = Promise.resolve("Dominos")
// let p3 = Promise.resolve("shopping")

// Promise.all([p1, p2, p3])
//     .then(results => {
//         console.log("all the promises", results)
//     })

// callback => callback hell -> promsie -> promise chaining -> async await -> fetch

fetch("https://jsonplaceholder.typicode.com/users/1")
.then(response => response.json()) //parse the json response
.then(data => console.log(data)) //console the data
.catch(error => console.log("error"))


// async function fetchUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//         const data = await response.json();
//         console.log(data)

//     } catch(errror) {
//         console.log("error")
//     }
// }

// fetchUsers()


console.log("a")
console.log("b")

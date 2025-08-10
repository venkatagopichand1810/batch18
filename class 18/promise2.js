// fetch("https://jsonplaceholder.typicdode.com/postss/1")
//     .then(response => {
//         return response.json();
//     })

//     .then((data) => {
//         console.log(data)
//     })


// const fetchUser = fetch("https://jsonplaceholder.typicode.com/users");

// const fetchPosts = fetch("https://jsonplaceholder.typicode.com/posts/");

// const fetchComments = fetch("https://jsonplaceholder.typicode.com/comments");

// Promise.all([fetchPosts,fetchComments, fetchUser])
// .then((results) => {
//     console.log("All data fetched successfully");
//     console.log("posts:", results[0])
//     console.log("comments:", results[1])
//     console.log("users:", results[2])
// })


//promise.all() waits for all the promises to resolve or rejects if anyone fail


// const promise1 = 
// new Promise((resolve) => setTimeout(() => resolve("First promise"), 1000));

// const promise2 = 
// new Promise((resolve) => setTimeout(() => resolve("second promise"), 2000));


// const promise3 = 
// new Promise((resolve, reject) => setTimeout(() => reject("rejected"), 3000));

// Promise.all([promise1, promise2, promise3])
//     .then((results) => {
//         console.log(results)
//     })
//     .catch((error) => {
//         console.error(error)
//     })


// promise.race

// const promise1 = 
// new Promise((resolve) => setTimeout(() => resolve("win the game promise"), 1000));

// const promise2 = 
// new Promise((resolve) => setTimeout(() => resolve("second winner promise"), 2000));
// const promise3 = 
// new Promise((resolve, reject) => setTimeout(() => reject("rejected"), 3000));



// Promise.allSettled([promise1, promise2, promise3])
//     .then((results) => {
//         console.log(results)
//     })
//     .catch((error) => {
//         console.error(error)
//     })


    // allsettled....returns the result of all the promises, regardless of whethter they resolve or reject


    const promise1 = 
new Promise((resolve, reject) => setTimeout(() => reject("rejected"), 0));


    const promise2 = 
new Promise((resolve) => setTimeout(() => resolve("win the game promise"), 2000));

const promise3 = 
new Promise((resolve) => setTimeout(() => resolve("second winner promise"), 1000));



Promise.any([promise1, promise2, promise3])
    .then((results) => {
        console.log(results)
    })
    .catch((error) => {
        console.error(error)
    })

    // promise.any() returns the value of the first fullfilled promise (ignore the rejections)


    // promise.race()...returns the value of the first promise to resolve or reject
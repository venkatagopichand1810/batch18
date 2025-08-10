// A Promise in javascript is an object  which will accept two arg(reject, resolve).
// callback hell...It allows us to handle the operations more effectively and we can avoid callback hell()


//promise states

// 1) pending state... initial state...

// 2) Fulfilled -> the operation was successful..the promise will return the success value

// 3) rejected The operation is failed..the promise will retruns the reason for the failure...

const myPromise = new Promise((resolve, reject) => {

    let success = true;

    if(success){
        resolve("Operation is success")
    } else {
        reject("operation is failed")
    }
})

// The Promise constructor takes a function with two parameters
//resolve()....call this when the operation is succesfull
//reject()....call this when the operation is failed

// consume the promise

//when the promise is resolved successfully

myPromise.then((result) => {
    console.log(result);
})


// we have to use catch() to handle the erros whent the promise is rejected

myPromise.catch((error) => {
    console.log(error)
})

myPromise.finally(() => {
    console.log("operation is completed")
})
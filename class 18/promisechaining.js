function step1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Pizza is ordered");
            resolve();
        }, 1000) 
    })
    
}


function step2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Preparing pizza");
            resolve();
        }, 1000) 
    })
}

function step3(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Delivery agent assigned");
            resolve();
        }, 1000) 
    })
}

function step4(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("out for deliver");
            resolve();
        }, 1000) 
    })
}


function step5(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Delivered");
            resolve();
        }, 1000) 
    })
}


// step1(() => {
//     step2(() => {
//         step3(() => {
//             step4(() => {
//                 step5(() => {
//                     console.log("Delivered and recived by the customer")
//                 })
//             })
//         })
//     })
// })

step1()
    .then(step2)
    .then(step3)
    .then(step4)
    .then(step5)
    .then(() => {
        console.log("Delivered and recived by the customer")
    })

    .catch((error) => {
        console.log("error", error)
    })







//callback -> callback -> promise -> promiseChaining
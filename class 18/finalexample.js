// function loginUser(email,password, callback) {
//     setTimeout(() => {
//         console.log("Logging in");
//         if(email === "user@gmail.com" && password === "welcome123") {
//             callback({id: 1, name: "venkat", email})
//         } else {
//             console.log('invalid credentials')
//         }
//     }, 1000)

// }


// function getUserProfile(userId, callback){
//     setTimeout(() => {
//        console.log(`fetching profile for user ID ${userId}`)
//        callback({id: userId, name: "venkat", email: "user@gmail.com"})
//     }, 1000)
// }


// function getUserOrders(userId, callback) {
//     setTimeout(() => {
//         console.log(`fetching orders for user ID ${userId}`)
//         callback(["order 1", "order 2", "order 3"])
//      }, 1000)
// }

// // callback hell
// loginUser("user@gmail.com", "welcome123" ,(user) => {
//     getUserProfile(user.id, (profile) => {
//         getUserOrders(profile.id, (orders) => {
//             console.log("Orders", orders)
//         })
//     });
// })



function loginUser(email,password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Logging in");
            if(email === "user@gmail.com" && password === "welcome123") {
                resolve({id: 1, name: "venkat", email})
            } else {
                reject('invalid credentials')
            }
        }, 1000)
    })


}


function getUserProfile(userId){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`fetching profile for user ID ${userId}`)
            resolve({id: userId, name: "venkat", email: "user@gmail.com"})
         }, 1000)
    })
   
}


function getUserOrders(userId) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`fetching profile for user ID ${userId}`)
            resolve(["order 1", "order 2", "order 3"])
         }, 1000)
    })
}

// promise chaining
// loginUser("user@gmail.com", "welcome123" )
//     .then(user => {
//         return getUserProfile(user.id)
//     })

//     .then(profile => {
//         return getUserOrders(profile.id)
//     })

//     .then(orders => {
//       console.log("Orders", orders)
//     })

//     .catch(error => {
//         console.log("Error", error)
//     })

async function fetchUserData() {

    try {
        const user = await  loginUser("user@gmail.com", "welcome123" );
        const profile = await getUserProfile(user.id);
        const orders  = await getUserOrders(profile.id);
        console.log("orders", orders)

    } catch(error){
        console.log("error", error)
    }
}

fetchUserData()

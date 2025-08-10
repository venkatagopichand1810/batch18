function getUserData(callback){
    setTimeout(() => {
        console.log("fetching user data");
        callback({userId: 1, name:"venkat"})
    })

}

function getUserOrders(userId, callback) {
    setTimeout(() => {
        console.log(`Fetching orders for the userID : ${userId}`)
        callback([{orderId: 101}, {orderId: 102}])
    })

}

function getOrderDetails(orderId, callback){
    setTimeout(() => {
        console.log(`fetching details for orderid: ${orderId}`)
        callback({orderId: orderId, product: "Laptop", price: 1200})
    })

}

getUserData((user) =>{
    getUserOrders(user.userId,(orders) => {
        getOrderDetails(orders[0].orderId, (orderDetails) => {
            console.log("order details", orderDetails)
            getOrderDetails(orders[1].orderId, (orderDetails) => {
                console.log("order details", orderDetails)
            })
        })
    })
})
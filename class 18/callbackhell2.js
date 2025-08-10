// callbackhell is nothing nested callback,,, one callback is depending up on another callback

// loginuser



function loginUser(username, password, callback){
    setTimeout(() => {
        console.log("user is logged in");
        callback({
            userId: 1,
            name: "venkat"
        })
    })
}


function getShippingAddress(userId, callback){
    setTimeout(() => {
        console.log(`Fetching shipping address for the user ID ${userId}`);
        callback({
            addressId: 101,
            city: "Bangalore"
        })
    })
}


function checkDeliverySlots(addressId, callback){
    setTimeout(() => {
        console.log(`checking the delivery solts for the addressID ${addressId}`)
        callback(['10:00 AM - 12: 00pm', '2:00 pm - 4: 00 pm'])
    }, 1000)

}

function getPaymentMethods(userId, callback){
    setTimeout(() => {
        console.log(`fetching the payment methods for the user ID ${userId}`)
        callback(["debit card", "credit card"])
    }, 1000)

}

function confirmOrder(userId, slot, paymethod, callback){
    setTimeout(() => {
        console.log(`Order is confirmed for the user ID ${userId}, Slot: ${slot}, Payment: ${paymethod}`)
        callback({status: "Confirmed", orderId: 555})
    }, 1000)

}


function sendConfirmationEmail(userID, orderId, callback){
    setTimeout(() => {
        console.log(`seding the confirmation email for the user ID ${userID} for the orderID ${orderId}`)
        callback("Email sent check your mailbox")
    }, 1000)

}






loginUser("zubar", "welcome123", (user) => {
    getShippingAddress(user.userId, (address) => {
        checkDeliverySlots(address.addressId, (slots) => {
            getPaymentMethods(user.userID, (methods) => {
                confirmOrder(user.userID, slots[0], methods[0], (order) => {
                    sendConfirmationEmail(user.userID, order.orderId, (result) => {
                        console.log(result)
                    })
                })
            })
        })

    })
});
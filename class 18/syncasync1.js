//  i wanted to create a program to 
// 
// 1) Sending an email
// 2) Sending an SMS

// here we are not using any callback concept

// function sendEmail(message) {
//     console.log("Preparing to send an email....")
//     setTimeout(() => {
//         console.log(`Email is sent: ${message}`)
//     }, 1000)

// }

// function sendSMS(message){
//     console.log("Preparing to send an SMS....")
//     setTimeout(() => {
//         console.log(`SMS is sent: ${message}`)
//     }, 2000)
// }


// sendEmail("hello, how are you today");
// sendSMS("good morning dude, today is holiday enjoy");


function sendMessage(message, callback){
    console.log("Preparing to send an message....")
    setTimeout(() => {
        callback(message); //passing the message to the callback
    }, 1000)
}

// callback function to send an email
function sendEmail(message) {
    console.log(`Email is sent: ${message}`)

}

// callback function to send an sms
function sendSMS(message){
    console.log(`SMS is sent: ${message}`)
}


sendMessage("hello, how are you today", sendEmail);
sendMessage("good morning dude, today is holiday enjoy", sendSMS);



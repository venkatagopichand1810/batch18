// # 1
const nodemailer = require("nodemailer");
// create the transporter object 
// #2 
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "maddelavenkatagopichand@gmail.com",
        pass: "oweg yohk zgtz eote"
    }
})

// #3
//set up the email data 

const mailOptions = {
    from: "maddelavenkatagopichand@gmail.com",
    to: "maddelavenkatagopichand@gmail.com",
    subject: "Hello this is venkat",

    html: "<b>Hello sirrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr</b>"
}
//#4 send mail

transporter.sendMail(mailOptions, (error, info) => {
    if(error){
        return console.log("unable to send the mail", error)
    }
    console.log("Message is sent successfully")
})
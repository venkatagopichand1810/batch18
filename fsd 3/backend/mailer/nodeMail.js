
const nodeMailer = require("nodemailer");

// load the env variables from .env
require("dotenv").config()

const sendMail = async (to, subject, text) => {
    const transporter = nodeMailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.PASS_USER
        }
    });


    const mailOption = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text
    }

    // send the mail
    try {
        await transporter.sendMail(mailOption);
        console.log("Mail sent to", to)
    } catch(error){
        console.log("Error sending the mail")
    }

}

module.exports = sendMail
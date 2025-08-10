const nodeMailer = require("nodemailer");

// transporter
const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMIAL_PASS
    }
})

module.exports = transporter;
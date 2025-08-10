
//import the bcrypt library
const bcrypt = require("bcrypt");

// define the pwd

const userPassword = "welcome@12345"

// salt...10
const saltRounds = 5;

bcrypt.hash(userPassword, saltRounds, function (err, hash) {
    console.log("user password", userPassword)
    console.log("hased password", hash); //encryption pwd

    // compare method
    bcrypt.compare(userPassword, hash, function (err, result) {
        if (err) {
            console.log("error comparing")
            return
        }
        if (result) {
            console.log("passwords are matched")
        } else {
            console.log("passwords doesnot match")
        }
    })
})


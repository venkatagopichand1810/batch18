const express = require("express");
const connectDB = require("./config/db")

// import the user model
const User = require("./models/User")

// insert the data

// const insertUser = async() => {
//     try {
//         // insert the data
//         const user = new User({
//             name: "dhoni",
//             email: "dhoni@gmail.com",
//             age: 55,
//             city: "tamilnadu"
//         })

//         // save the user data in mongodb
//         const savedUser = await user.save();
//         console.log("data saved successfully in mongodb", savedUser)

//     } catch(error){
//         console.log("error inserting the data")
//     }

// }


// const insertManyUser = async() => {
//     try {
//         // insert the data
//         const users = [
//             {
//                 name: "jack",
//                 email: "jack@gmail.com",
//                 age: 25
//             },
//             {
//                 name: "bob",
//                 email: "bob@gmail.com",
//                 age: 30
//             },
//             {
//                 name: "alice",
//                 email: "alice@gmail.com",
//                 age: 50
//             }
//         ]


//         // save the user data in mongodb
//         const savedUser = await User.insertMany(users);
//         console.log("data saved successfully in mongodb", savedUser)

//     } catch(error){
//         console.log("error inserting the data")
//     }

// }

const findUser = async() => {
    try {
        const user = await User.findOne({email: "alice@gmail.com"});
        console.log("User is valid", user)
    } catch(error){
        console.log("user is not found")
    }
}

const updateUser = async() => {
    try {
        // i wanted to update the user name
        const result = await User.updateOne(
            {email : "alice@gmail.com"},
            {$set: {name: "Alice venkata"}}
        )
        console.log("updated the user name",result)

    } catch(err){
        console.log("unable to update")
    }
}



// initialize app
const app = express();
const PORT = 5004

// connect to the mongodb
connectDB()

// insertManyUser(); //calling the insert method

findUser()

updateUser()


app.listen(PORT, () => {
    console.log("Server is running")
})

const express = require("express");

const jwt = require("jsonwebtoken");

// import the user model 

const User = require("../models/userModels");

// hashing the password
const bcrypt = require("bcrypt");

//import the mail config
const sendMail = require("../mailer/nodeMail");


//create the router
const router = express.Router();

require("dotenv").config(); //this will load the env variables


//user registration

router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // check if the user already exists in the db
        const exisitingUser = await User.findOne({ $or: [{ username }, { email }] });

        if (exisitingUser) {
            return res.status(400).json({
                error: "Username or email already exists "
            })
        }

        const hashPassword = await bcrypt.hash(password, 10); //hashing
        const newUser = new User({ username, email, password: hashPassword });
        await newUser.save();
        res.status(201).json({
            message: "User is registered successfully"
        })

    } catch (error) {
        res.status(400).json({
            error: "Failed to register the user"
        })
    }
})



//initiating the password-reset

router.post("/password-reset", async(req, res) => {

    const {email} = req.body;

    try {
        //check if the user exists in the db
        const user = await User.findOne({email: email});

        // if user is not found, return an error 
        if(!user){
            return res.status(400).json({
                message: "User is not found"
            })
        }

        // generate the random token for the password reset, 
        const token = jwt.sign({userId: user._id}, process.env.SECRET_KEY, {expiresIn: "1hr"});

        user.resetPasswordToken = token;
        user.resetPasswordExpries = Date.now() + 3600000;

        // save the updated user in the database
        await user.save(); 

        //create the password rest link 
        const resetlink = `http://localhost:3000/reset-password/${token}`;

        // send the reset link to the user's email
        await sendMail(user.email, "Password Reset", `Rest your password : ${resetlink}`);

        res.status(200).json({
            message: `Password reset link is sent to you mail ${user.email}`
        })

    } catch(error){
        res.status(500).json({
            message: "Server error"
        })
    }

})



//route for the resetting the password

router.post("/reset-password/:token", async (req, res) => {

    const {password} = req.body;

    // get the token from the request parameters
    const {token} = req.params;

    //verify the token 

    try {
        const decode = jwt.verify(token, process.env.SECRET_KEY);

        const user = await User.findById(decode.userId);

        //if no user is found, 
        if(!user){
            return res.status(400).json({
                error: "User is not found"
            })
        }

        // check if the token is expired
        if(user.resetPasswordExpries < Date.now()) {
            return res.status(400).json({
                error: "Token has expired"
            })
        }

        // hash the new password using the bycrpt 
        user.password = await bcrypt.hash(password, 10);
        user.resetPasswordExpries = undefined; 
        user.resetPasswordToken = undefined; 

        await user.save();

        res.status(200).json({
            message: "Password reset successfully"
        })
    } catch(error){
        res.status(400).json({
            error: "invalid or expired token"
        })
    }
})

module.exports = router;
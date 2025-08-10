const User = require("../models/User"); //model importing 
const bcrypt = require("bcryptjs"); //hashing the pwd, to create the encrypted password
const jwt = require("jsonwebtoken"); //generate the token

// user register
exports.registerUser = async (req, res) => {
    const{name, email, password} = req.body;
    try {
        // check if the user is already exists
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({message: "User is already exists"})
        }

        // hashing the pwd
        const salt = await bcrypt.genSalt(10); //to generate the strong pwd
        const hashedPassword = await bcrypt.hash(password,salt)

        // create the user
        const user = await User.create({
            name, 
            email, 
            password: hashedPassword
        })

        // generate the JWT token 
        const token = jwt.sign({id: user._id}, process.env.JWT_SCERET_KEY, {
            expiresIn: "1h"
        })

        res.status(201).json({
            token, 
            user: {
                id: user._id, 
                name: user.name, 
                email: user.email
            }
        })

    } catch(error){
        res.status(500).json({message: error.message})
    }

}





//user login

exports.loginUser = async (req, res) => {
    const{email, password} = req.body;
    try {
        // check if the user is present or not in DB
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message: "user is not there please register"})
        }

        // check the pwd
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message: "Invalid password"})
        }

        // generate the JWT token 
        const token = jwt.sign({id: user._id}, process.env.JWT_SCERET_KEY, {
            expiresIn: "1h"
        })

        res.status(201).json({
            token, 
            user: {
                id: user._id, 
                name: user.name, 
                email: user.email
            }
        })

    } catch(error){
        res.status(500).json({message: error.message})
    }

}

exports.getUsers = async(req, res) => {
    const users = await User.find();
    res.json(users)
}
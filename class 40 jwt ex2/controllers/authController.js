const jwt = require('jsonwebtoken');
const User = require("../models/userModel");
const generateToken = require('../utils/jwtUtil');


// login controller


const login = async (req, res) => {

    const { username, password } = req.body;

    //check if both are provided
    if (!username || !password) {
        return res.status(400).json({ message: "username and password are required " })
    }

    try {
        // find the user in DB
        const user = await User.findOne({ username })

        //validate the user
        if(!user || user.password !== password) {
            return res.status(401).json({message: "invalid credentials"})
        }

        // generate the jwt token 
        const token = generateToken(user);

        res.status(200).json({
            message: "Login successfull",
            token,
            user: {
                id: user._id,
                username: user.username,
                role: user.role
            }
        })
    } catch(error){
        res.status(500).json({message: "server error"})

    }
    
}


const adminAccess = async (req, res) => {

    try {
        
        const authHeader = req.headers.authorization;

        if(!authHeader){
            return res.status(401).json({message: "no token provided"})
        }

        const token = authHeader.split(" ")[1];
        console.log(token)

        const decoded = jwt.verify(token, process.env.JWT_SECRET); //DECODEDING THE TOKEN
        console.log("decoded", decoded)
        const user = await User.findById(decoded.id);
        console.log("user", user)
        

        //validate the user
        if(!user || user.role !== "admin") {
            return res.status(401).json({message: "access denied"})
        }


        res.status(200).json({
            message: "Welcome to admin",
            user: {
                id: user._id,
                username: user.username,
                role: user.role
            }
        })
    } catch(error){
        res.status(500).json({message: "server error"})

    }
    
}


module.exports = {
    login, adminAccess
}







//admin controller 


//bcrypt
//veeifiction...middlware
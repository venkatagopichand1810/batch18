
const jwt = require("jsonwebtoken");

function generateToken(user){
    const payload = {
        id: user._id,
        role: user.role
    }

    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_in
    })
}

module.exports = generateToken
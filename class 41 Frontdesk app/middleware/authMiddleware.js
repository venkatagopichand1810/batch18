const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if(!token) {
        return res.status(401).json({
            message: "No token is provide"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; //userid, role
        next();
    } catch(err){
        res.status(401).json({
            message: "invalid token"
        })
    }
}

module.exports = authenticate;
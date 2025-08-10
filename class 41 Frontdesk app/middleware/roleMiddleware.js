// middlware to restrice the access based on the user roles
const authorize = (...roles) => {
    // return the middlware function 
    return (req, res, next) => {
        // check if the user role is included in the allowed roles
        if(!roles.includes(req.user.role)){
            return res.status(403).json({message: "Access denined"})
        }
        // if the user's role is authorized, process to the next midllware/controller
        next()
    }
}

module.exports = authorize
function checkRole(role,req,res,next){

    var role  = req.headers("role")

    if(!role){
        return res.json({message:"specify the role"})
    }
    
    if(role == "admin"){
        res.json({message:"you have full access"})
        next()
    }

    if(role == "user"){
        res.json({message:"welcome  to user role"})
        next()
    }
}

app.get("/home",checkRole,(req,res) =>{
    res.json({message:`welcome to the home page}`})
})

const checkuser = async (req, res, next) => {
   try {
    console.log("checking the user......")

        await new Promise(resolve => setTimeout(resolve, 1000))
        const userExits = true;
        if(!userExits){
            return res.send("user not authorized")
        }
        console.log("user is authorized")
        next()

   } catch(error){
    console.log("error fetching the user")
    
   }
}

module.exports = checkuser
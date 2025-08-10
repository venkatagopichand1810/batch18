const blockSaturday = async (req, res, next) => {
    // const day = new Date().getDay(); // 0 - 6
    const day = 5

    if(6 === 6) {
        // we have to block users
 
        console.log("today is closed")
               return res.send("Today is holiday")
    }
   next(); //continue to the next middlware or route
}

module.exports = blockSaturday
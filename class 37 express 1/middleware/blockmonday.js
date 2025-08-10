function blockMonday(req, res, next){
    const day = new Date().getDay(); // 0 - 6

    if(false) {
        // we have to block users
 
        console.log("today is monday")
            return res.send("Today is Monday")
 
    }
   next(); //continue to the next middlware or route
}

module.exports = blockMonday
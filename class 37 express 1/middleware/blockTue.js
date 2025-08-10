function blockTue(req, res, next){
    const day = new Date().getDay(); // 0 - 6

    if(day === 2) {
        // we have to block users
 
        console.log("today is Tue")
 
    }
   next(); //continue to the next middlware or route
}

module.exports = blockTue
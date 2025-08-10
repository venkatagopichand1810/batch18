
function serverlogs (req, res, next) {
    // console.log(`${req.method} ${req.url} at ${new Date().toISOString()}`)
    const method = req.method; //get, post.
    const url = req.url; //url access
    const time = new Date().toISOString() //timezone
    console.log(`Time is....[${time}] ........ Method is ${method} .... Url is ${url}`)
    next()
}

module.exports = serverlogs

const asyncLogger = async (req, res, next) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
         console.log(`Async....${req.method} ${req.url} at ${new Date().toISOString()}`)

    next()
}

module.exports = asyncLogger
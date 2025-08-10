
function sync (req, res, next) {
      console.log(`sync....${req.method} ${req.url} at ${new Date().toISOString()}`)
    next()
}

module.exports = sync
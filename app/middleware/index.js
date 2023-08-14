checkValue = (req, res, next) => {
    const auth = req.headers.authorization
    if(!auth){
        return res.send("Access Denied")
    }
    next()
}
const middleware = {
    checkValue
}
module.exports = middleware
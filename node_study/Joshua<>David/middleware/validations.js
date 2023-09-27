module.exports = middleware = (req, res, next) => {
    if(req.method === 'POST'){
        const data = req.body
        if(data.name && data.email && data.password){
            next()
        } else {
            return res.status(400).end()
        }
    }

    next()
}
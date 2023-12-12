const jwt = require('jsonwebtoken')
const User = require('../model/user')

const isLoggedIn = async (req, res, next) => {
    if (req.cookies.jwt){ //INSTALL COOKIE-PARSER FOR THIS TO WORK
        try {
            const decoded = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET)
            const user = await User.findOne({_id: decoded._id, 'tokens.token': req.cookies.jwt})
            .populate('complaints')

            if(!user) {
                return next()
            }

            // THERE IS A LOGGED IN USER!!!
            res.locals.user = user //THIS EXPOSES THE USER TO OUR PUG TEMPLATES. AWESOME!!
            return next()
        } catch (e) {
            return next()
        }   
    } 
    next()
}

module.exports = isLoggedIn
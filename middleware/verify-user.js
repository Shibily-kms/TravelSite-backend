const jwt = require('jsonwebtoken')
const UserModel = require('../models/user')


const verifyUser = async (req, res, next) => {
    try {

        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {

            const token = req.headers.authorization.split(' ')[1];
            
            const jwtToken = jwt?.verify(token, process.env.JWT_KEY)
           
            if (jwtToken) {
                const userId = jwtToken.userId
                const user = await UserModel.findById({ _id: userId })
                if (!user) {
                    return res.status(400).json({ status: false, message: 'Invalid token' })
                }

                req.user = {
                    Id: user._id
                }
                next()

            } else {
                return res.status(400).json({ status: false, message: 'Invalid token' })
            }

            if (!token) {
                res.status(401)
                throw new Error('No token');
            }
        }


    } catch (error) {
        return res.status(500).json({ status: false, message: 'token not available' })

    }
}

module.exports = { verifyUser }
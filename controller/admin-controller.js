const jwt = require('jsonwebtoken')

const postLogin = (req, res) => {
    try {
        let { email, password } = req.body
        const adminDetails = {
            id: '54835469',
            email: process.env.ADMIN_EMAIL,
            password: process.env.ADMIN_PASSWORD
        }
        if (email === adminDetails.email) {
            if (password === adminDetails.password) {

                const token = jwt.sign({ email: adminDetails.email }, process.env.JWT_KEY, { expiresIn: 1000 * 60 * 60 * 24 * 100 })

                res.status(201).json({ status: true, admin: { email: adminDetails.email, token } })
            } else {
                res.status(400).json({ status: false, message: 'Invalid Password' })
            }
        } else {
            res.status(400).json({ status: false, message: 'Invalid Email Id' })
        }
    } catch (error) {
        throw Error;
    }
}


module.exports = { postLogin }
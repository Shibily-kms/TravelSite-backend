const jwt = require('jsonwebtoken')
const HolidayModel = require('../models/holiday')
const PopularModel = require('../models/popular')
const UserModel = require('../models/user')
const bcrypt = require('bcrypt');
const otpHelper = require('../helper/otp-helper')

// Auth

const doSignUp = async (req, res) => {
    try {
        let body = req.body
        const user = await UserModel.findOne({ email: body.email })
        if (user) {
            res.status(400).json({ status: false, message: 'This email used' })
        } else {
            body.password = await bcrypt.hash(body.password, 10)
            UserModel.create(body).then((response) => {
                res.status(201).json({ status: true, message: 'account created' })
            }).catch((error) => {
                res.status(400).json({ status: false, message: 'Try Now!' })
            })
        }
    } catch (error) {

    }
}

const doLogin = async (req, res) => {
    try {
        let body = req.body
        const user = await UserModel.findOne({ email: body.email })
        if (user) {
            let status = await bcrypt.compare(body.password, user.password);
            if (status) {
                delete user._doc.password
                const token = jwt.sign({ userId: user._id }, process.env.JWT_KEY, { expiresIn: 1000 * 60 * 60 * 24 * 100 })
                res.status(201).json({ status: true, user, token })
            } else {
                res.status(400).json({ status: false, message: 'Incorrect Password' })
            }
        } else {
            res.status(400).json({ status: false, message: 'Invalid EmailId' })
        }
    } catch (error) {

    }
}

const getUser = async (req, res) => {
    UserModel.findById({ _id: req.user.Id }).then((user) => {
        delete user._doc.password
        res.status(201).json({ status: true, user })
    })
}


const getHoliday = (req, res) => {
    try {
        HolidayModel.find().limit(6).then((response) => {
            res.status(200).json({ status: true, data: response })
        })
    } catch (error) {

    }
}
const getPopular = (req, res) => {
    try {
        PopularModel.find().limit(6).then((response) => {
            res.status(200).json({ status: true, data: response })
        })
    } catch (error) {

    }
}


// Forgot

const postForgot = (req, res) => {
    try {
        let email = req.body.email
        UserModel.findOne({ email }).then((user) => {
            if (user) {
                otpHelper.dosms(user.mobile).then(() => {
                    res.status(201).json({ status: true, email, mobile: user.mobile })
                })
            } else {
                res.status(400).json({ satus: false, message: 'No account in this mail' })
            }
        })
    } catch (error) {

    }
}

const postOtp = (req, res) => {
    try {
        let { mobile, email, otp } = req.body
        otpHelper.otpVerify(otp, mobile).then((response) => {
            if (response) {
                res.status(201).json({ status: true, email, message: 'Virification Success' })
            } else {
                res.status(400).json({ status: true, message: "Incurrect OTP" })
            }
        })
    } catch (error) {

    }
}


const postChangePassword = async (req, res) => {
    try {
        let password = req.body.password
        let email = req.body.email
        console.log(req.body)
        password = await bcrypt.hash(password, 10)
        console.log(password, 'pass')
        await UserModel.updateOne({ email }, {
            $set: {
                password
            }
        }).then(() => {
            console.log('rsepnserjsdf kjsdf lsdj')
            res.status(201).json({ status: true, message: 'Password Changed' })
        }).catch((error) => {
            console.log(error, 'error')
        })

    } catch (error) {

    }
}

module.exports = { getHoliday, getPopular, doSignUp, doLogin, getUser, postForgot, postOtp, postChangePassword }
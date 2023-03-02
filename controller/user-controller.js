const jwt = require('jsonwebtoken')
const HolidayModel = require('../models/holiday')
const PopularModel = require('../models/popular')
const UserModel = require('../models/user')
const bcrypt = require('bcrypt');

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


module.exports = { getHoliday, getPopular, doSignUp }
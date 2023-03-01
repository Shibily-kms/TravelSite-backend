const jwt = require('jsonwebtoken')
const HolidayModel = require('../models/holiday')


const getHoliday = (req, res) => {
    try {
        HolidayModel.find().limit(6).then((response) => {
            res.status(200).json({ status: true, data: response })
        })
    } catch (error) {

    }
}


module.exports = { getHoliday }
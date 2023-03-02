const jwt = require('jsonwebtoken')
const HolidayModel = require('../models/holiday')
const PopularModel = require('../models/popular')

// Login
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

// Holiday
const postHolidayImage = (req, res) => {
    try {
        res.status(200).json({ status: true, message: 'Success' });
    } catch (error) {
        throw error;
    }
}

const postHoliday = (req, res) => {
    try {
        let body = req.body
        console.log(body);
        HolidayModel.create(body).then((response) => {
            if (response) {
                res.status(201).json({ status: true, data: response, message: 'New item added' })
            }
        }).catch((error) => {
            res.status(400).json({ status: false, message: 'Not added' })
        })
    } catch (error) {

    }
}

const getHoliday = (req, res) => {
    try {
        console.log('hihihihi');
        HolidayModel.find().then((result) => {
            res.status(201).json({ status: true, data: result })
        })
    } catch (error) {
        res.status(400).json({ status: false, message: "can not find items" })
    }
}

const deleteHoliday = (req, res) => {
    const id = req.params.id
    console.log(id, 'id')
    try {
        HolidayModel.findByIdAndDelete(id).then((respones) => {
            console.log(respones, 'sdfsd')
            res.status(200).json({ status: true, message: "deleted" })
        })
    } catch (error) {

    }
}

// Video0
const postVideo = (req, res) => {
    console.log('video complted');
}

// Popular


const postPopularImage = (req, res) => {
    try {
        res.status(200).json({ status: true, message: 'Success' });
    } catch (error) {
        throw error;
    }
}

const postPopular = (req, res) => {
    try {
        let body = req.body
        console.log(body);
        PopularModel.create(body).then((response) => {
            if (response) {
                res.status(201).json({ status: true, data: response, message: 'New item added' })
            }
        }).catch((error) => {
            res.status(400).json({ status: false, message: 'Not added' })
        })
    } catch (error) {

    }
}

const getPopular = (req, res) => {
    try {
        console.log('hihihihi');
        PopularModel.find().then((result) => {
            res.status(201).json({ status: true, data: result })
        })
    } catch (error) {
        res.status(400).json({ status: false, message: "can not find items" })
    }
}

const deletePopular = (req, res) => {
    const id = req.params.id
    console.log(id, 'id')
    try {
        PopularModel.findByIdAndDelete(id).then((respones) => {
            console.log(respones, 'sdfsd')
            res.status(200).json({ status: true, message: "deleted" })
        })
    } catch (error) {

    }
}


module.exports = {
    postLogin, postHolidayImage, postHoliday, getHoliday, deleteHoliday, postVideo,
    postPopularImage, postPopular, getPopular, deletePopular,
}
const express = require('express');
const router = express.Router();
const { getHoliday, getPopular, doSignUp, doLogin, getUser, postForgot, postOtp,postChangePassword } = require('../controller/user-controller')
const { verifyUser } = require('../middleware/verify-user')

// Auth
router.post('/sign-up', doSignUp)  
router.post('/login', doLogin)
router.get('/user', verifyUser, getUser)

// Forgot
router.post('/forgot-password',postForgot)
router.post('/otp',postOtp)
router.post('/change-password',postChangePassword)

router.get('/perfect-holiday', getHoliday)
router.get('/popular-flight', getPopular)

module.exports = router;
const express = require('express');
const router = express.Router();
const { getHoliday, getPopular, doSignUp, doLogin, getUser } = require('../controller/user-controller')
const { verifyUser } = require('../middleware/verify-user')

// Auth
router.post('/sign-up', doSignUp)
router.post('/login', doLogin)
router.get('/user', verifyUser, getUser)

router.get('/perfect-holiday', getHoliday)
router.get('/popular-flight', getPopular)

module.exports = router;
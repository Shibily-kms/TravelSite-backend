const express = require('express');
const router = express.Router();
const { getHoliday, getPopular, doSignUp } = require('../controller/user-controller')

// Auth
router.post('/sign-up', doSignUp)

router.get('/perfect-holiday', getHoliday)
router.get('/popular-flight', getPopular)

module.exports = router;
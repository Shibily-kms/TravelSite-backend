const express = require('express');
const router = express.Router();
const { getHoliday, getPopular } = require('../controller/user-controller')

router.get('/perfect-holiday', getHoliday)
router.get('/popular-flight', getPopular)

module.exports = router;
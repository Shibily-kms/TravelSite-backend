const express = require('express');
const router = express.Router();
const { getHoliday } = require('../controller/user-controller')

router.get('/perfect-holiday', getHoliday)

module.exports = router;
const express = require('express');
const router = express.Router();
const { postLogin, postHolidayImage, postHoliday, getHoliday, deleteHoliday } = require('../controller/admin-controller')
const store = require('../config/multer');


// Auth
router.post('/login', postLogin)
router.post('/perfect-holiday', postHoliday)
router.get('/perfect-holiday', getHoliday)
router.delete('/perfect-holiday/:id', deleteHoliday)
router.post('/perfect-holiday/image', store.single('file'), postHolidayImage)



router.get('/login', (req, res) => {
    res.status(200).json('hi')
})

module.exports = router;
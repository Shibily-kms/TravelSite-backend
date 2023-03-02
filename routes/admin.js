const express = require('express');
const router = express.Router();
const { postLogin, postHolidayImage, postHoliday, getHoliday, deleteHoliday, postVideo } = require('../controller/admin-controller')
const store = require('../config/multer');
const uploadVideo = require('../config/multer-video');


// Auth
router.post('/login', postLogin)

// Holiday
router.post('/perfect-holiday', postHoliday)
router.get('/perfect-holiday', getHoliday)
router.delete('/perfect-holiday/:id', deleteHoliday)
router.post('/perfect-holiday/image', store.single('file'), postHolidayImage)

// Video
router.post('/video', uploadVideo.single('video'), postVideo)



router.get('/login', (req, res) => {
    res.status(200).json('hi')
})

module.exports = router;
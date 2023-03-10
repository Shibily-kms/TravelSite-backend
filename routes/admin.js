const express = require('express');
const router = express.Router();
const { postLogin, postHolidayImage, postHoliday, getHoliday, deleteHoliday, postVideo,
    postPopularImage, postPopular, getPopular, deletePopular, } = require('../controller/admin-controller')
const store = require('../config/multer');
const videostore = require('../config/multer-video');


// Auth
router.post('/login', postLogin)

// Holiday
router.post('/perfect-holiday', postHoliday)
router.get('/perfect-holiday', getHoliday)
router.delete('/perfect-holiday/:id', deleteHoliday)
router.post('/perfect-holiday/image', store.single('file'), postHolidayImage)

// Video
router.post('/video', videostore.single('file'), postVideo)

// Popular
router.post('/popular-flight', postPopular)
router.get('/popular-flight', getPopular)
router.delete('/popular-flight/:id', deletePopular)
router.post('/popular-flight/image', store.single('file'), postPopularImage)


router.get('/login', (req, res) => {
    res.status(200).json('hi')
})

module.exports = router;
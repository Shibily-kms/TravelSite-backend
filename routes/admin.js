const express = require('express');
const router = express.Router();
const { postLogin } = require('../controller/admin-controller')


// Auth
router.post('/login', postLogin)
router.get('/login', (req,res)=>{
    res.status(200).json('hi')
})

module.exports = router;
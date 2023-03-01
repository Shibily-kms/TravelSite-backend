const mongoose = require('mongoose');


const holidaySchema = new mongoose.Schema({
    title: String,
    price: Number,
    image: String

},
    {
        timestamps: true
    })

const HolidayModel = mongoose.model('holiday', holidaySchema)
module.exports = HolidayModel
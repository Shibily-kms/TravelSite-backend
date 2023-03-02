const mongoose = require('mongoose');


const popularSchema = new mongoose.Schema({
    title: String,
    price: Number,
    image: String

},
    {
        timestamps: true
    })

const PopularModel = mongoose.model('popular', popularSchema)
module.exports = PopularModel
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    mobile: String,
    password: String

},
    {
        timestamps: true
    })

const UserModel = mongoose.model('user', userSchema)
module.exports = UserModel
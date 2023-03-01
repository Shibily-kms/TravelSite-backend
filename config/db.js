const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL)
        console.log(`database connected`);
    } catch (error) {
        throw error
    }
}

module.exports = connectDB
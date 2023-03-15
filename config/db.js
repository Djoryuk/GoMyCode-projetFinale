const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = async () => {
     try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log(` Connected to MONGO DATABASE ${mongoose.connection.host}`.bgGreen.white);
     } catch (error) {
        console.log(`Mongodb database error ${error}`.bgRed.white);
     }
}
module.exports = connectDB
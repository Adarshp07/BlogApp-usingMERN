const mongoose = require('mongoose')
const colors = require('colors')
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDb connected succefully ${mongoose.connection.host}`.bgMagenta.white);

    }
    catch (error) {
        console.log(`MONGO CONNECT ERROR ${error}`.bgRed.white);
    }
}

module.exports = connectDB;
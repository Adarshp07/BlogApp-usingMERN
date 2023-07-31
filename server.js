const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/connectDB');


// .env
dotenv.config();


// mongodb connection
connectDB()
// rest object
const app = express();
//middlewares

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.get('/', (req, res) => {
    res.status(200).send({
        "message": "Namaskar World"
    }
    )
})

app.listen(8000, () => {
    console.log("Server is running on 8000".bgCyan.white)
})
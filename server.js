const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/connectDB');


// .env
dotenv.config();

//router import
const userRoutes = require("./routes/userRoutes");


// mongodb connection
connectDB();

// rest object
const app = express();
//middlewares

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/user", userRoutes);


//PORT
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
    console.log("Server is running on 8080".bgCyan.white);
});
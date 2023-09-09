const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');

dotenv.config();

//Connect to Database
mongoose.connect(process.env.DB_CONNECT).then(  
    (res) => {
    console.log('Connected to Database')
}).catch((err) => {
    console.log(err)
});

//Middlewares
app.use(express.json());

//Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/post', postRoute);

app.listen(3000, () => console.log('Server up and running'));
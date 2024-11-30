const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute');


const app = express();

app.use(bodyParser.json());

app.use('/api/users', userRoute);

mongoose.connect('mongodb+srv://mine4christ:Minneok@cluster0.ge8e7.mongodb.net/')
.then(()=>{
    console.log('Database is connected');
}).catch(err =>{
    console.error('Mongoose Db connection error', err);
});

module.exports = app;
//import external modules
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Connect to database
mongoose.connect('mongodb://localhost/gaventilmaven', {useNewUrlParser: true, useUnifiedTopology: true});

//import local modules
const storeUserController = require('./controllers/storeUserController');

//initialize new express app
const app = new express();

//defines a port
app.listen(4000, (req,res)=>{
    console.log('Listening to port 4000...');
});

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Thomas' trylledrik. Tillader samtlige CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        res.status(200).json({})
    }
    next()
});

//create
app.post('/user/create', storeUserController);


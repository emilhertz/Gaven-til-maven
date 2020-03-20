//import external modules
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

//Connect to database
mongoose.connect('mongodb+srv://emilhertz:toQfuf-qebxi6-jynqic@gaventilmaven-lbpln.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

//import local modules
const storeUserController = require('./controllers/storeUserController');
const storeRestaurantController = require('./controllers/storeRestaurantController');
const getRestaurantController = require('./controllers/getRestaurantController');

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
//read
app.get('/restaurant/get', getRestaurantController);

app.get('/user/get',getUserController);

//create
app.post('/user/create', storeUserController);

app.post('/restaurant/create', storeRestaurantController);



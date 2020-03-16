//import external modules
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

//Connect to database
mongoose.connect('mongodb://localhost/gaventilmaven', {useNewUrlParser: true, useUnifiedTopology: true})

//import local modules
const homePageController = require('./controllers/homePage');
const adminPageController = require('./controllers/adminPage');
const loginController = require('./controllers/login');
const reservationController = require('./controllers/reservation');
const reserveController = require('./controllers/reserve');

//initialize new express app
const app = new express();

//defines a port
app.listen(4000, (req,res)=>{
    console.log('Emil er guldjomfru 4000');
});

//defines where all the static files are stored
app.use(express.static(path.join(__dirname, '../views', 'public')));

//endpoints
app.get('/', homePageController);

app.get('/admin', adminPageController);

app.get('/login', loginController);

app.get('/reservations', reservationController);

app.get('/reserve', reserveController);

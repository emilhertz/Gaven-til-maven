//imports modules
const express = require('express');
const path = require('path');
const ejs = require('ejs');
const mongoose = require("mongoose");
const Address = require("./models/Address");

//mongoose connects to the database "gaven_til_maven"
mongoose.connect("mongodb://localhost/gaven_til_maven", {useNewUrlParser: true});

//new app
const app = new express();
app.set('view engine', 'ejs');

//use public directory for static files
app.use(express.static(path.resolve(__dirname,'public')));

//assigns port
app.listen(420, ()=>{console.log('App listening on port 420')});

//assigning paths
app.get('/', (req, res)=> {
    res.render('index')
});

app.get('/adminPage', (req, res)=> {
    res.render('adminPage')
});

app.get('/login', (req, res)=> {
    res.render('login')
});

app.get('/reservations', (req, res)=> {
    res.render('reservations')
});

app.get('/reserve', (req, res)=> {
    res.render('reserve')
});

//Test that the program works
Address.create({
    streetName: "kebooobsen",
    streetNumber: 69,
    zipCode: 666,
    city: "LetsFuck",
    country: "Usbekistan"
});
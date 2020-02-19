//imports modules
const express = require('express');
const path = require('path');

//new app
const app = new express();

//use public directory for static files
app.use(express.static('public'));

//assigns port
app.listen(420, ()=>{console.log('App listening on port 420')});

//defining paths
app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'pages/index.html'))
});
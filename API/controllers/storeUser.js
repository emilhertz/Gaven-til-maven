const mongoose = require('mongoose');
const User = require('../models/User');

module.exports = async (req, res)=>{
    try{
    await User.create({ ...req.body, isAdmin: false });
    res.redirect('/login')
    } catch (e) {
        console.log(e);
        res.redirect('/create')
    }
};
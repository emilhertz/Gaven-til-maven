const mongoose = require('mongoose');
const User = require('../models/User');

module.exports = async (req, res)=>{
    try{
    await User.create({ ...req.body, isAdmin: false });
    await res.json({
        created: true
    })
    } catch (e) {
        console.log(e);
        await res.json({
            created: false
        })
    }
};
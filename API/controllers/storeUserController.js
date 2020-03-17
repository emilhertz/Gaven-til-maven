const mongoose = require('mongoose');
const User = require('../models/User');

module.exports = async (req, res)=>{
    try{
        // is admin ikke restfull
    await User.create({ ...req.body, isAdmin: false });
    await res.send({
        created: true
    })
    } catch (e) {
        await res.send({
            created: false,
            errors: e.message
        })
    }
};
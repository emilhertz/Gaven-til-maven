const mongoose = require('mongoose');
const User = require('../models/User');

module.exports = async (req, res)=>{
    try{
    await User.create({ ...req.body});
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
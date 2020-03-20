const mongoose = require('mongoose');
const User = require('../models/User');

module.exports =  async (req, res)=>{
    try{
        const users = await User.find({
            username: `${req.body.username}`
        });
        res.send({users: users});
    }
    catch (e) {
        res.send({
            error: e.message,
            users: {}
        });
    }
};
const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = (req, res) => {
    User.find({
        username: req.body.username
    })
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: 'Auth failed'
                })
            }

            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json( {
                        message: "Auth failed"
                    })
                }

                if (result) {
                    return res.status(200).json({
                        message: 'Auth Successful',
                        isAdmin: user[0].isAdmin

                    })
                }

                //This is 'nødvendig' --> Tjek lige op på den :-)
                return res.status(401).json( {
                    message: "Auth failed"
                })

            })

        })

        //If we doesen't get any response from the database
        .catch((err) =>{
            console.log(err)
            return res.status(401).json( {
                message: "Auth failed"
            })

        })
};
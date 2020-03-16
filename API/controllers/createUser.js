const path = require('path');

//controller navigates to the homepage file, and sends it to the user
module.exports = (req, res)=>{
    res.sendFile(path.join(__dirname, '../../views', 'newUser.html'))
};
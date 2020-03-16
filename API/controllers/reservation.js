const path = require('path');

//controller navigates to the page file, and sends it to the user
module.exports = (req, res)=>{
    res.sendFile(path.join(__dirname, '../../views', 'reservations.html'))
};
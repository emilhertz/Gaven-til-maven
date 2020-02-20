const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const AddessSchema = new Schema({
    streetName: String,
    streetNumber: Number,
    zipCode: Number,
    city: String,
    country: String
})

const Address = mongoose.model("Address", AddessSchema);

module.exports = Address;

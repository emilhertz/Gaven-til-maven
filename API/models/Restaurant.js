const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Restaurant = new Schema({
    name: {
        type: String,
        required: true
    },
    addressid: {
        streetName: {
        type: String,
        required: true
        },
        streetNumber: {
            type: Number,
            required: true
        },
        zipCode: {
            type: Number,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    },
    description: {
        type: String,
        required: true
    },

    admin: {

    }
})
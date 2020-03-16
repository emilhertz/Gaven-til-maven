const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const Reservation = new Schema({
    timeOfReservation: {
        type: String,
        required: true
    },

    pax: {
        type: Number,
        required: true
    },

    comment: {
        type: String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'User',
        required: true
    },
    restaurantId: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'User',
        required: true
    }

});
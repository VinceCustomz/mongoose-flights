const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const date = new Date();
const dateOneYearLater = date.setDate(date.getDate()+365)

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: new Date(dateOneYearLater)
    }
    }, {
        timestamps: true
});
module.exports = mongoose.model('Flight', flightSchema);
//connection.js
'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var ConnectionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    characterType: {
        type: {
            type: Schema.Types.ObjectId,
            ref: "characterType"
        },
        required: true
    }
});

module.exports = mongoose.model('Connection', ConnectionSchema);
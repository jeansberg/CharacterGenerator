//focus.js
'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var FocusSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Focus', FocusSchema);
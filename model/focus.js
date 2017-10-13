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
    },
    ability: {
        type: Schema.Types.ObjectId,
        ref: "Ability"
    }
});

module.exports = mongoose.model('Focus', FocusSchema);
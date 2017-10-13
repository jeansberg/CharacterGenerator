//ability.js
'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var AbilitySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ["Enabler", "Action"]
    },
    description: {
        type: String,
        required: true
    },
    automatic: [String],
    choice: [String]
});

AbilitySchema.statics.getAutomaticAbilities = function (matcher, cb) {
    return this.find({
        choice: matcher
    }, cb);
}

AbilitySchema.statics.getAbilityChoices = function (matcher, cb) {
    return this.find({
        choice: matcher
    }, cb);
}

module.exports = mongoose.model('Ability', AbilitySchema);
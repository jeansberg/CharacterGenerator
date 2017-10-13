//descriptor.js
'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var DescriptorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    stats: [{
        name: String,
        value: Number
    }],
    skills: [{
        type: Schema.Types.ObjectId,
        ref: "Skill",
        level: Number
    }],
    equipment: [{
        name: String,
        type: String
    }],
});

module.exports = mongoose.model('Descriptor', DescriptorSchema);
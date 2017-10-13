//characterType.js
'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var CharacterTypeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    stats: {
        type: [{
            name: String,
            value: Number
        }],
        required: true
    },
    effort: {
        type: Number,
        required: true
    },
    edges: {
        type: [{
            name: String,
            value: Number
        }],
        required: true
    },
    cypherUse: {
        type: Number,
        required: true
    },
    abilities: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "Ability"
        }],
        required: true
    },
    skills: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "Skill",
            level: Number
        }],
        required: true
    },
    equipment: {
        type: [{
            name: String,
            type: String
        }],
        required: true
    },
});

module.exports = mongoose.model('CharacterType', CharacterTypeSchema);
//character.js
'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var CharacterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    class: {
        type: Schema.Types.ObjectId, ref: "characterType",
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
    abilities: [{
        type: Schema.Types.ObjectId,
        ref: 'Ability',
        level: Number
    }],
    skills: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "Skill",
            level: {
                type: String,
                enum: ["Inability", "Trained", "Specialized"]
            }
        }],
        required: true
    },
    equipment: {
        type: [{
            name: String,
            type: String,
            amount: Number
        }],
        required: true
    },
    connection: {
        type: Schema.Types.ObjectId,
        ref: "Connection"
    }
});

module.exports = mongoose.model('Character', CharacterSchema);
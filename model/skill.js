//skill.js
'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var SkillSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    automatic: [String],
    choice: [String]
});

SkillSchema.statics.getAutomaticSkills = function (matcher, cb) {
    return this.find({
        choice: matcher
    }, cb);
}

SkillSchema.statics.getSkillChoices = function (matcher, cb) {
    return this.find({
        choice: matcher
    }, cb);
}

module.exports = mongoose.model('Skill', SkillSchema);
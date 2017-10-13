var express = require('express');
var router = express.Router();
var Skill = require('../model/skill')

router.route('/')
    .get(function (req, res) {
        Skill.find(function (err, skills) {
            if (err) {
                res.send(err);
            }
            res.json(skills);
        })
    });

module.exports = router;
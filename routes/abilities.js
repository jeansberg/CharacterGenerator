var express = require('express');
var router = express.Router();
var Ability = require('../model/ability')

router.route('/')
    .get(function (req, res) {
        Ability.find(function (err, abilities) {
            if (err) {
                res.send(err);
            }
            res.json(abilities);
        })
    });

module.exports = router;
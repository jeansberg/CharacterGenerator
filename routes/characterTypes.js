var express = require('express');
var router = express.Router();
var CharacterType = require('../model/characterType')

router
    .route('/')
    .get(function (req, res) {
        CharacterType
            .find(function (err, characterTypes) {
                if (err) {
                    res.send(err);
                }
                res.json(characterTypes);
            })
    });

module.exports = router;
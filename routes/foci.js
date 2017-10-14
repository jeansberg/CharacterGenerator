var express = require('express');
var router = express.Router();
var Focus = require('../model/focus')

router
    .route('/')
    .get(function (req, res) {
        Focus
            .find(function (err, focus) {
                if (err) {
                    res.send(err);
                }
                res.json(focus);
            })
    });

module.exports = router;
var express = require('express');
var router = express.Router();
var Descriptor = require('../model/descriptor')

router
    .route('/')
    .get(function (req, res) {
        Descriptor
            .find(function (err, descriptors) {
                if (err) {
                    res.send(err);
                }
                res.json(descriptors);
            })
    });

module.exports = router;
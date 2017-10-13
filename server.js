//server.js
'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var skills = require('./routes/skills.js');
var abilities = require('./routes/abilities.js');

var app = express();

var port = process.env.API_PORT || 3001

var mongoDb = 'mongodb://testuser:test1234@ds113925.mlab.com:13925/chargen'
mongoose.connect(mongoDb, {
    useMongoClient: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDb connection error'));

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json());

app.use('/skills', skills);
app.use('/abilities', abilities);

app.listen(port, function () {
    console.log('API running on port ' + port)
})
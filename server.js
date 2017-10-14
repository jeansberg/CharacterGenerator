//server.js
'use strict'

//first we import our dependencies...
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var characterTypes = require('./routes/characterTypes')
var foci = require('./routes/foci')
var descriptors = require('./routes/descriptors')
var skills = require('./routes/skills')
var abilities = require('./routes/abilities')

//and create our instances
var app = express();

var port = process.env.API_PORT || 3001;

var mongoDB = 'mongodb://node_user:x+9596Rp4we_TWd#@ds113925.mlab.com:13925/chargen';
mongoose.connect(mongoDB, {useMongoClient: true})
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// To prevent errors from Cross Origin Resource Sharing, we will set our headers
// to allow CORS with middleware like so:
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Acc' +
      'ess-Control-Request-Method, Access-Control-Request-Headers');

  //and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.use('/types', characterTypes);
app.use('/foci', foci);
app.use('/descriptors', descriptors);
app.use('/abilities', abilities);
app.use('/skills', skills);

//starts the server and listens for requests
app.listen(port, function () {
  console.log(`api running on port ${port}`);
});

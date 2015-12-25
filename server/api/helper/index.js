'use strict';

var express = require('express');
var controller = require('./helper.controller');

var router = express.Router();

//just a helper API which to be used 
//when information needs to be retrieved from the server

router.get('/position', controller.getInitialChessPosition);


module.exports = router;

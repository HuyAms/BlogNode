const router = require('express').Router();
var createRoutes = require('../../util/createRoutes');
var controller = require('./categoryController');
createRoutes(controller, router);
module.exports = router;

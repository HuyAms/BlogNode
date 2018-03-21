const express = require('express');
const app = express();
const api = require('./api/api');

//setup the app middleware
require('./middleware/appMiddleware')(app);

//setup the api
app.use('/api/', api);

//export the app for testing
module.exports = app;
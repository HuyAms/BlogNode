const express = require('express');
const app = express();
const api = require('./api/api');
const error = require('./util/apiError');

//setup the app middleware
require('./middleware/appMiddleware')(app);

//setup the api
app.use('/api/', api);

//handle error
app.use((err, req, res, next) => {
  if (!(err instanceof error.APIError)) {
    const apiError = new error.APIError(err.message, err.status);
    return next(apiError);
  }
  return next(err);
})

//export the app for testing
module.exports = app;
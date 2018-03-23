const mongoose = require('mongoose');
const error = require('../util/apiError');

exports.validateUserParam = (req, res, next) => {
  req.checkBody('username', 'Invalid username').notEmpty();

  req.getValidationResult().then((result) => {
    if (!result.isEmpty()) {
      return next(error.badRequestError);
    }
  });
};

exports.validatePostParam = (req, res, next) => {
  req.checkBody('title', 'Invalid title').notEmpty();
  req.checkBody('text', 'Invalid text').notEmpty();
  req.checkBody('author', 'Invalid title').notEmpty();

  req.getValidationResult().then((result) => {
    if (!result.isEmpty()) {
      return next(error.badRequestError);
    }
  });
};
const error = require('../util/apiError');

exports.validateUserParam = (req, res, next) => {
  req.checkBody('username', 'Username should not be empty').notEmpty();
  req.checkBody('password', 'Password should not be empty').notEmpty();

  const errors = req.validationErrors();
  if (errors) {
    next(error.badRequestError(errors[0].msg));
  }
  next();
};

exports.validatePostParam = (req, res, next) => {
  req.checkBody('title', 'Title should not be empty').notEmpty();
  req.checkBody('text', 'Text should not be empty').notEmpty();

  const errors = req.validationErrors();
  if (errors) {
    next(error.badRequestError(errors[0].msg));
  }
  next();
};

exports.validateCategory = (req, res, next) => {
  req.checkBody('name', 'Category name should not be empty').notEmpty();

  const errors = req.validationErrors();
  if (errors) {
    next(error.badRequestError(errors[0].msg));
  }
  next();
};
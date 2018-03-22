const User = require('./userModel');
const _ = require('lodash');
const error = require('../../util/apiError');
const responseHandler = require('../../util/responseHandler');

exports.params = (req, res, next, id) => {
  User.findById(id).then((user) => {
    if (!user) {
      next(error.notFoundUserError);
    } else {
      req.user = user;
      next();
    }
  }, (err) => {
    next(error.internalServerError);
  });
};

exports.get = (req, res, next) => {
  User.find({}).then((users) => {
    res.json(responseHandler.successResponse(users));
  }, (err) => {
    next(error.internalServerError);
  });
};

exports.getOne = (req, res, next) => {
  const user = req.user;
  res.json(responseHandler.successResponse(user));
};

exports.put = (req, res, next) => {
  const user = req.user;

  const update = req.body;

  _.merge(user, update);

  user.save((err, saved) => {
    if (err) {
      next(error.internalServerError);
    } else {
      res.json(responseHandler.successResponse(saved));
    }
  });
};

exports.post = (req, res, next) => {
  const newUser = req.body;

  User.create(newUser).then((user) => {
    res.json(responseHandler.successResponse(user));
  }, (err) => {
    next(ererror.internalServerErrorr);
  });
};

exports.delete = (req, res, next) => {
  req.user.remove((err, removed) => {
    if (err) {
      next(error.internalServerError);
    } else {
      res.json(responseHandler.successResponse(removed));
    }
  });
};

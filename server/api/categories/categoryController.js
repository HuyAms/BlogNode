const Category = require('./categoryModel');
const _ = require('lodash');
const error = require('../../util/apiError');
const responseHandler = require('../../util/responseHandler');

exports.params = (req, res, next, id) => {
  Category.findById(id).then((category) => {
    if (!category) {
      next(error.notFoundCategoryError);
    } else {
      req.category = category;
      next();
    }
  }, (err) => {
    next(error.internalServerError);
  });
};

exports.get = (req, res, next) => {
  Category.find({}).then((categories) => {
    res.json(responseHandler.successResponse(categories));
  }, (err) => {
    next(error.internalServerError);
  });
};

exports.getOne = (req, res, next) => {
  const category = req.category;
  res.json(responseHandler.successResponse(categories));
};

exports.put = (req, res, next) => {
  const category = req.category;

  const update = req.body;

  _.merge(category, update);

  category.save((err, saved) => {
    if (err) {
      next(err);
    } else {
      res.json(responseHandler.successResponse(saved));
    }
  });
};

exports.post = (req, res, next) => {
  const newCategory = req.body;

  Category.create(newCategory).then((category) => {
    res.json(responseHandler.successResponse(category));
  }, (err) => {
    next(error.internalServerError);
  });
};

exports.delete = (req, res, next) => {
  req.category.remove((err, removed) => {
    if (err) {
      next(error.internalServerError);
    } else {
      res.json(removed);
    }
  });

};


const Post = require('./postModel');
const _ = require('lodash');
const error = require('../../util/apiError');
const responseHandler = require('../../util/responseHandler');

exports.param = (req, res, next, id) => {
  Post.findById(id).populate('author categories').exec().then((post) => {
    if (!post) {
      next(error.notFoundPostError);
    } else {
      req.post = post;
      next();
    }
  }, (err) => {
    next(error.internalServerError);
  });
};

exports.get = (req, res, next) => {
  Post.find({}).populate('author categories').exec().then((posts) => {
    res.json(responseHandler.successResponse(posts));
  }, (err) => {
    next(err.internalServerError);
  });
};

exports.getOne = (req, res, next) => {
  const post = req.post;
  res.json(responseHandler.successResponse(post));
};

exports.put = (req, res, next) => {
  const post = req.post;
  const update = req.body;
  _.merge(post, update);
  post.save((err, saved) => {
    if (err) {
      next(err.internalServerError);
    } else {
      res.json(responseHandler.successResponse(saved));
    }
  });
};

exports.post = (req, res, next) => {
  const newPost = req.body;

  Post.create(newPost).then((post) => {
    res.json(responseHandler.successResponse(post));
  }, (err) => {
    next(error.internalServerError);
  });
};

exports.delete = (req, res, next) => {
  req.post.remove((err, removed) => {
    if (err) {
      next(error.internalServerError);
    } else {
      res.json(responseHandler.successResponse(removed));
    }
  });
};

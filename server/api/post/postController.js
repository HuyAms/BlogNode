const Post = require('./postModel');
const _ = require('lodash');
const error = require('../../util/apiError');
const responseHandler = require('../../util/responseHandler');

exports.params = (req, res, next, id) => {
  Post.findById(id).populate('author categories').exec().then((post) => {
    if (!post) {
      next(error.notFoundError('Cannot find post with that id'));
    } else {
      req.post = post;
      next();
    }
  }, (err) => {
    next(error.notFoundError('Cannot find post with that id'));
  });
};

exports.get = (req, res, next) => {
  Post.find({}).populate('author categories').exec().then((posts) => {
    res.json(responseHandler.successResponse(posts));
  }, (err) => {
    next(err.internalServerError());
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
      next(error.badRequestError('Duplicate title error'));
    } else {
      res.json(responseHandler.successResponse(saved));
    }
  });
};

exports.post = (req, res, next) => {
  const newPost = req.body;
  newPost.author = req.user._id;

  Post.create(newPost).then((post) => {
    res.json(responseHandler.successResponse(post));
  }, (err) => {
    next(error.badRequestError('Duplicate title error'));
  });
};

exports.delete = (req, res, next) => {
  req.post.remove((err, removed) => {
    if (err) {
      next(error.internalServerError());
    } else {
      res.json(responseHandler.successResponse(removed));
    }
  });
};

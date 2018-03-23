const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const config = require('../config/config');
const checkToken = expressJwt({secret: config.secrets.jwt});
const User = require('../api/user/userModel');
const error = require('../util/apiError');

exports.decodeToken = () => {
  return (req, res, next) => {
    let formattedToken;
    //If found token in query then place it in the header
    if (req.query && req.query.hasOwnProperty('access_token')) {
      formattedToken = 'Bearer ' + req.query.access_token;
      req.headers.authorization = formattedToken;
    }

    formattedToken = 'Bearer ' +  req.headers.authorization;
    req.headers.authorization = formattedToken;

    //call next if token is valid
    //send error if token is invalid, then attached the decoded token to req.user
    checkToken(req, res, next);
  };
};

exports.getFreshUser = () => {
  return (req, res, next) => {
    User.findById(req.user._id).then((user) => {
      //Cannot find user with that id
      if (!user) {
        res.status(401).json(error.unauthorizedError);
      } else {
        //update req.user with fresh user from database
        req.user = user;
        next();
      }
    }, (err) => {
      next(err);
    });
  };
};

exports.verifyUser = () => {
  return (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    //if no username or password then send
    if (!username || !password) {
      res.status(400).json(error.badRequestError);
      return;
    }

    //look user up in the FB so we can check if the passwords match
    //for the username
    User.findOne({username: username}).then((user) => {
      if (!user) {
        res.status(401).json(error.badRequestError);
      } else {
        if (!user.authenticate(password)) {
          res.status(401).json(error.unauthorizedError);
        } else {
          //if everything is ok
          //attach to req.user
          //and call next so the controller
          //can sign a token from the req.user._id
          req.user = user;
          next();
        }
      }
    }, (err) => {
      next(err);
    });
  };
};

//util method to sign tokens on signup
exports.signToken = (id) => {
  return jwt.sign(
      {_id: id},
      config.secrets.jwt,
      {expiresIn: config.expireTime}
  );
};


const User = require('../api/user/userModel');
const signToken = require('./auth').signToken;

exports.signin = (req, res, next) => {
  // req.user will be there from the middleware
  // verify user. Then we can just create a token
  // and send it back for the client to consume
  const token = signToken(req.user_id);
  res.json({token: token});
}
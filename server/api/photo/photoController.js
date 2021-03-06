const error = require('../../util/apiError');
const responseHandler = require('../../util/responseHandler');

exports.post = (req, res, next) => {
  console.log(req);
  if (req.file) {
    res.json(responseHandler.successResponse(req.file.filename));
  } else {
    next(error.internalServerError());
  }
};


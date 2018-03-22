const httpStatus = require('http-status');

class ExtendableError extends Error {
  constructor(message, status) {
    super(message);
    this.message = message;
    this.status = status;
  }
}

class APIError extends ExtendableError {
  constructor(message, status = httpStatus.INTERNAL_SERVER_ERROR) {
    super(message, status);
  }
}

/*2xx*/

/*3xx*/

/*4xx*/
const badRequestError = new APIError('Invalid params', httpStatus.BAD_REQUEST);//400
const unauthorizedError = new APIError('Invalid token',
    httpStatus.UNAUTHORIZED);//401

const notFoundError = new APIError('Not found', httpStatus.NOT_FOUND);//404
const notFoundCategoryError = new APIError('No category with that id',
    httpStatus.NOT_FOUND);//404
const notFoundPostError = new APIError('No post with that id',
    httpStatus.NOT_FOUND);//404
const notFoundUserError = new APIError('No user with that id',
    httpStatus.NOT_FOUND);//404

/*5xx*/
const internalServerError = new APIError('Unexpected database error.',
    httpStatus.INTERNAL_SERVER_ERROR); //500

module.exports = {
  APIError,
  badRequestError,
  unauthorizedError,
  notFoundError,
  internalServerError,
  notFoundCategoryError,
  notFoundPostError,
  notFoundUserError
};
const router = require('express').Router();
const auth = require('../../auth/auth');
const controller = require('./categoryController');
const validator = require('../../middleware/validation');
const checkUser = [auth.decodeToken(), auth.getFreshUser()];

router.param('id', controller.params);

router.route('/')
  .get(controller.get)
  .post(checkUser, validator.validateCategory, controller.post);

router.route('/:id')
  .get(controller.getOne)
  .put(checkUser, validator.validateCategory, controller.put)
  .delete(checkUser, controller.delete);

module.exports = router;

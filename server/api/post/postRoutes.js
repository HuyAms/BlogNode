const router = require('express').Router();
const auth = require('../../auth/auth');
const controller = require('./postController');
const checkUser = [auth.decodeToken(), auth.getFreshUser()];
const validator = require('../../middleware/validation');


router.param('id', controller.params);

router.route('/')
  .get(controller.get)
  .post(checkUser, validator.validatePostParam, controller.post);

router.route('/:id')
  .get(controller.getOne)
  .put(checkUser, validator.validatePostParam, controller.put)
  .delete(checkUser, controller.delete);

module.exports = router;
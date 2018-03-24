const router = require('express').Router();
const auth = require('../../auth/auth');
const controller = require('./userController');
const checkUser = [auth.decodeToken(), auth.getFreshUser()];
const validator = require('../../middleware/validation');

router.param('id', controller.params);
router.get('/me', checkUser, controller.me);

router.route('/')
  .get(controller.get)
  .post(validator.validateUserParam, controller.post);

router.route('/:id')
  .get(controller.getOne)
  .put(checkUser, controller.put)
  .delete(checkUser, controller.delete);

module.exports = router;
const router = require('express').Router();

var controller = require('./userController');
var createRoutes = require('../../util/createRoutes');
createRoutes(controller, router);

// router.post('/', (req, res, next) => {
//   console.log(req.body);
//   res.send('Hello');
// });

module.exports = router;
const router = require('express').Router();

router.route('/').get((req, res) => {
  console.log('Hey from user!!');
  res.send({ok: true});
});

module.exports = router;
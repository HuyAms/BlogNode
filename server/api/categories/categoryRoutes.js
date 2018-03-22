const router = require('express').Router();

router.route('/').get((req, res) => {
  console.log('Hey from categories!!');
  res.send({ok: true});
});

module.exports = router;

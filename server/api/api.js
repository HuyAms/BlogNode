const router = require('express').Router();

router.use('/users', require('./user/userRoutes'));
router.use('/categories', require('./categories/categoryRoutes'));
router.use('/posts', require('./post/postRoutes'));
router.use('/photos', require('./photo/photoRoutes'));

module.exports = router;
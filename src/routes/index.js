const router = require('express').Router();
const routes = require('./twitter.routes');

router.use('/tweet', routes);

module.exports = router;
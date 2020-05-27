var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res,)=> {
  res.send({ status: 'success' });
});
router.use('/albums', require('./album'));
router.use('/photos', require('./photo'));


module.exports = router;
  
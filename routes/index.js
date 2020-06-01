const express = require('express');
const router = express.Router();
const auth = require('../controllers/middlewares/auth');

/* GET home page. */
router.get('/', (req, res,)=> {
  res.send({ status: 'success' });
});



router.use('/albums', require('./album'));
router.use('/photos', require('./photo'));
router.use('/profile',[auth.basic], require('./profile'));
router.use('/users', require('./users'));




module.exports = router;
  

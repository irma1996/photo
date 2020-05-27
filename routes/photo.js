const express = require('express');
const router = express.Router();
const models = require('../models/');
 


/* GET/ */
router.get('/', async (req, res) => {
  const all_photo = await models.Photo.findAll();
  console.log('all photo', all_photo)

  res.send({ 
      status:'success',
      data:{
      photos: all_photo
  
     } 
  });
});


/* GET:id/ */
router.get('/:id', async (req, res) => {
  const first_photo = await models.Photo.findByPk(req.params.id)
  console.log('first photo', first_photo)
 
  res.send({ status: 'give me all the photos', data:{first_photo} });
});


 
module.exports = router;
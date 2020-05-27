const express=require('express');
const router= express.Router();
const models=require('../models');
 
/* GET / */
router.get('/', async (req, res) => {
  const all_album = await models.Album.findAll();
  console.log('all album', all_album)

  res.send({ 
      status:'success',
      data:{
      albums: all_album
  
      } 
  });
});


/* GET :id / */
router.get('/:id', async (req, res) => {
    const first_album = await models.Album.findByPk(req.params.id);
    console.log('first album', first_album)
 
    res.send({ status:'give me all the photos', data:{first_album} });
  });
 
module.exports = router;



    


const express =require('express');
const router = express.Router();
const albumController = require('../controllers/album_controller');
const albumsValidationRules = require ('../validation_rules/albums');

/* GET all resources / */
router.get('/albums', albumController.index); 


/* GET a specific resource / */
router.get('/albums/:id', albumController.show); 


/* POST  store a new resources/ */
router.post('/albums', albumsValidationRules.createRules, albumController.store); 

/* Store a new resource */
router.post('/albums/:albumId/photos', albumsValidationRules.photoToAlbum, albumController.addAlbumsToPhoto);

/* UPDATE a specific resources / */
router.put('/photos/:photoid', albumController.update); 


module.exports = router;


    


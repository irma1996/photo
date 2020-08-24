const express =require('express');
const router = express.Router();
const albumController = require('../controllers/album_controller');
const albumsValidationRules = require ('../validation_rules/albums');

/* GET all resources / */
router.get('/', albumController.index); 

/* GET a specific resource / */
router.get('/:id', albumController.show); 

/* POST  store a new resources/ */
router.post('/', albumsValidationRules.createRules, albumController.store); 

/* Store a new resource */
router.post('/:albumId/photos', albumsValidationRules.photoToAlbum, albumController.addAlbumsToPhoto);

/* UPDATE a specific resources / */
router.put('/:photoid', albumController.update); 


module.exports = router;


    


const express =require('express');
const router = express.Router();
const albumController = require('../controllers/album_controller');
 

/* GET all resources / */
router.get('/albums', albumController.index); 


/* GET a specific resource / */
router.get('/albums/:id', albumController.show); 


/* POST  store a new resources/ */
router.post('/albums', albumController.store); 


/* UPDATE a specific resources / */
router.put('/photos/:photoid', albumController.update); 


module.exports = router;


    


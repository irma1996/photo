const express =require('express');
const router = express.Router();
const albumController = require('../controllers/album_controller');
 

/* GET all resources / */
router.get('/', albumController.index); 


/* GET a specific resource / */
router.get('/:id', albumController.show); 


/* POST  store a new resources/ */
router.post('/', albumController.store); 


/* UPDATE a specific resources / */
router.put('/', albumController.update); 


module.exports = router;


    


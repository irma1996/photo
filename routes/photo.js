const express = require('express');
const router = express.Router();
const photoController = require('../controllers/photo_controller-copy');


 /* GET/ */
router.get('/photos',photoController.index);


/* GET :id / */
router.get('/photos/:id',photoController.show);


/* POST  store a new resources/ */
router.post('/photos',photoController.store); 


/* UPDATE a specific resources / */
router.put('/photos/:id',photoController.update); 

 
module.exports = router;
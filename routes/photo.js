const express = require('express');
const router = express.Router();
const photoController = require('../controllers/photo_controller-copy');


 /* GET/ */
router.get('/',photoController.index);


/* GET :id / */
router.get('/:id',photoController.show);


/* POST  store a new resources/ */
router.post('/',photoController.store); 


/* UPDATE a specific resources / */
router.put('/',photoController.update); 

 
module.exports = router;
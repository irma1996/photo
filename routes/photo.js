const express = require('express');
const router = express.Router();
const photoController = require('../controllers/photo_controller');
const photosValidationRules = require ('../validation_rules/photos');

 /* GET/ */
router.get('/',photoController.index);


/* GET :id / */
router.get('/:id',photoController.show);


/* POST  store a new resources/ */
router.post('/', photosValidationRules.createRules, photoController.store); 

/* UPDATE a specific resources / */
router.put('/:id',photoController.update); 

 
module.exports = router;
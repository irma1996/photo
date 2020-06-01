const express =require('express');
const router = express.Router();
const profileController = require('../controllers/profile_controller');
const profileValidationRules = require ('../validation_rules/profile');

/* GET resources / */
router.get('/', profileController.getProfile); 

/* GET resource's albums / */
router.get('/albums', profileController.getAlbums); 

/* UPDATE a specific resources / */
router.put('/', profileValidationRules.updateProfileRules,profileController.updateProfile); 


module.exports = router;


    


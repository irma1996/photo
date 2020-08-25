const express =require('express');
const router = express.Router();
const usersController = require('../controllers/user_controller');
const userValidationRules = require ('../validation_rules/user');

/* GET all resources / */
router.get('/', usersController.index); 


/* GET a specific resource / */
router.get('/:userId', usersController.show); 


/* POST  store a new resources/ */
router.post('/', userValidationRules.createRules, usersController.store); 


/* UPDATE a specific resources / */
router.put('/:userId',usersController.update); 


module.exports = router;


    


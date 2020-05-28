const express =require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller');
 

/* GET all resources / */
router.get('/', usersController.index); 


/* GET a specific resource / */
router.get('/:userid', usersController.show); 


/* POST  store a new resources/ */
router.post('/', usersController.store); 


/* UPDATE a specific resources / */
router.put('/', usersController.update); 


module.exports = router;


    


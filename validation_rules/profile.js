
//Profile Validation Rules

const { body } = require('express-validator');

const updateProfileRules = [
    body('password').optional().isLength({ min:3}),
    body('first_name').optional().isLength({ min:3}),
    body('last_name').optional().isLength({ min:3}),
];


module.exports = {
    updateProfileRules, 
   
}
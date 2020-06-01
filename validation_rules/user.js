
//User Validation Rules

const { body } = require('express-validator');
const models = require('../models');

const createRules = [
    body('email').isLength({ min:4}).custom(async value =>{
         const user = await new models.User({ email: value}).fetch({require: false});
         if(user){
            return Promise.reject('Email already exists.');
        }

        return Promise.resolve();
    }),

    body('password').isLength({ min:3}),
    body('first_name').isLength({ min:3}),
    body('last_name').isLength({ min:3}),
    body('username').isLength({ min: 3}),
    
];


const updateRules = [
    body('password').optional().isLength({ min:3}),
    body('first_name').optional().isLength({ min:3}),
    body('last_name').optional().isLength({ min:3}),
];


module.exports = {
    createRules, 
    updateRules,
}
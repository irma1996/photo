
//User Validation Rules

const { body } = require('express-validator');
const models = require('../models');

const createRules = [   
    body('title').isLength({ min: 3 }),
    body('photo_id').isLength({ min: 1 }),
    body('user_id').optional().isLength({ min: 1 }), 
];

const photoToAlbum = [body('photo_id').custom(value => {
    return models.Photo.fetchById(value);
    }) 
];


const updateRules = [
    body('password').optional().isLength({ min:3}),
    body('first_name').optional().isLength({ min:3}),
    body('last_name').optional().isLength({ min:3}),
];


module.exports = {
    createRules,
    photoToAlbum, 
    updateRules,
}
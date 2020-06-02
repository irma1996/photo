const { matchedData, validationResult } = require('express-validator');
const models = require('../models');
const { Photo } =require('../models');

//GET/
const index = async (req, res) => {
        const photos = await models.Photo.fetchAll()
       
        res.send({ status: 'success', data:{photos} });
};

//GET/:photoId
const show = async (req, res) => {
        const photo = await new models.Photo({ id: req.params.id })
        .fetch({withRelated: ['albums', 'users']});
       
        res.send({ status: 'success', data:{photo} });      
};

//POST
const store = async (req,res) => {
        const errors = validationResult(req);
                if(!errors.isEmpty()) {
                   console.log('Create photo request failed validation:', errors.array());
                   res.status(422).send({
                        status: 'fail',
                        data: errors.array(),
                });
                return;
         }
        
        const validData = matchedData(req);
        
        
        try{
        const photo = await new Photo(validData).save();
        console.log("Created new photo successfully:", photo);
        
        res.send({
                status: 'success',
                data: {
                        photo,
                },
         });
        }catch(error){  
                res.status(500).send({
                        status:'error',
                        message: 'Exception thrown in database when creating a new photo',
                });
                throw errors;
        
        }
}             
        
        
     // UPDATE  a specific resources 
const update =(req,res) =>{
        res.status(405).send({
           status: 'fail',
           message: 'Method no allowed',

        });
};


module.exports ={
    index,
    show,
    store,
    update,
}
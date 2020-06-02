const { matchedData, validationResult } = require('express-validator');
const models = require('../models');
const { Album } =require('../models');

//GET/
const index = async (req,res) =>{  
        
        const albums = await models.Album.fetchAll();
       
        res.send({ status:'success', data:{albums} });
};

//GET/:albumId
const show = async(req,res) =>{

        const album = await new models.Album({ id: req.params.id })
        .fetch({withRelated: ['photos']});
    
        res.send({ status:'success', data:{album }});
};


//POST
const store = async (req,res) => {
        const errors = validationResult(req);
                if(!errors.isEmpty()) {
                   console.log('Create album request failed validation:', errors.array());
                   res.status(422).send({
                        status: 'fail',
                        data: errors.array(),
                });
                return;
         }
        
        const validData = matchedData(req);
        
        
        try{
        const album = await new Album(validData).save();
        console.log("Created new album successfully:", album);
        
        res.send({
                status: 'success',
                data: {
                        album,
                },
         });
        }catch(error){  
                res.status(500).send({
                        status:'error',
                        message: 'Exception thrown in database when creating a new album',
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
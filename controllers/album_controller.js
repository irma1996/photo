const { matchedData, validationResult } = require('express-validator');
const models = require('../models');
const { Album,Photo }=require('../models');

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
   //Photo to Album
// POST /albums/:albumid/photo - Post photo to album 
const addAlbumsToPhoto = async(req,res) =>{
   
        const error = validationResult(req);
        if (!error.isEmpty()) {
            res.status(422).send({
                status: 'fail',
                data: error.array()
            })
            return;
        }
       
        try {
        const photo = await Photo.fetchById(req.body.photo_id);
        const album = await Album.fetchById(req.params.albumId);
        console.log(album);
        console.log(photo);


        const photoToAlbum = await album.photos().attach([photo]);
 
        res.status(201).send({
            status: 'success',
            data: photoToAlbum,
        });
 
    } catch (err) {
        res.status(500).send({
        status: 'error',
        message: 'error when trying to add photo to album'
        });
        throw error;
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
    addAlbumsToPhoto,
    update,
}
const models=require('../models');


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
const store =(req,res) =>{
        res.status(405).send({
           status: 'fail',
           message: 'Method no allowed',

        });
};

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
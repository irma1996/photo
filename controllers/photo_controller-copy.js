const models=require('../models');

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
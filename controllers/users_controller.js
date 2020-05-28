const models=require('../models');


//GET Users/
const index = async (req,res) =>{  
        
        const users = await models.User.fetchAll();
       
        res.send({ status:'success', data:{users} });
};

//GET/:UserId
const show = async(req,res) =>{

        const user = await new models.Album({ id: req.params.userid })
        .fetch({withRelated: ['users']});
    
        res.send({ status:'success', data:{user }});
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
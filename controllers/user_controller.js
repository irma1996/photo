const bcrypt = require('bcrypt');
const { matchedData,validationResult} = require('express-validator');
const models=require('../models');


//GET Users/
const index = async (req,res) =>{  
const users = await models.User.fetchAll();
       
        res.send({ status:'success', data:{users} });
};

//GET/:UserId
const show = async(req,res) =>{
const user = await new models.User({ id: req.params.userId })
        .fetch();
    
        res.send({ status:'success', data:{user }});
};

//POST
const store = async (req,res) => {
const errors = validationResult(req);
        if(!errors.isEmpty()) {
           console.log('Create user request failed validation:', errors.array());
           res.status(422).send({
                status: 'fail',
                data: errors.array(),
        });
        return;
 }

const validData = matchedData(req);

//generate a hash of 'validData.password'
try{
     const hash = await bcrypt.hash(validData.password, models.User.hashSaltRounds)
     validData.password = hash;   

}catch(error){  
        res.status(500).send({
                status:'error',
                message: 'Exception thrown when hashing the password',
        });
        throw errors;

}
        try{
            const user = await new models.User(validData).save();
            console.log('Created new user', user);
            res.send({
                status: 'success',
                data:{
                    user,
            },
        });

        }catch (error){   
             res.status(500).send({
                status: 'error',
                message: 'Exception thrwon in database when creating a new user'
                });   
        throw error;
    }
}


// UPDATE  a specific resources 
const update =async(req,res) =>{
        const userId =req.params.userId;
        
        const user = await new models.User({ id: userId}).fetch({ require:false }); 
        if(!user) {
             console.log("User to update was not found", errors.array());
                res.status(404).send({
                   status:'fail',
                   data: 'User Not Found',
              });  
        return;
}
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
                console.log("Update user request failed validation:", errors.array());
                res.status(422).send({
                   status: 'fail',
                   data: errors.array(),
        });
        return;
}


        const validData = matchedData(req);
        try{
                const updatedUser = await user.save(validData);
                console.log('Updated user successfully', updatedUser);
             
                res.send({
                   status: 'success',
                   data:{
                        user: updatedUser,
                },
        });
                
        }catch (error){   
                res.status(500).send({
                    status: 'error',
                    message: 'Exception thrown in database when updating a new User'
                });   
        throw error;
        }
}
                



module.exports ={
    index,
    show,
    store,
    update,
}
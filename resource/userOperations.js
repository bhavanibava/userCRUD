const user = require('../model/index');

const getAllUserDetails = function(req,res){
    user.find((err,data)=>{
        if(!err){
            console.log('get All userDetails : ',data);
            res.send(data);
        }
        else
            return err;
    })
};

const getOneUserDetails = function(req,res){
    user.findOne({emailId : req.params.email},(err,data)=>{
        if(!err){
            console.log('user data depends upon email : ',data);
            res.send(data);
        }
        else
            return err;
    })
};

const createUserDetails = function(req,res){
    user.create(req.body,(err,data)=>{
        if(!err){
            console.log('user details Added successfully and its details are : ',data);
            res.send(data);
        }
        else
            return err;
    })
};

const updateUserDetails = function(req,res){
    user.findByIdAndUpdate(req.params.id,req.body,(err,data)=>{
        if(!err){
            console.log('user details are updated successfully and given data is : ',data);
            res.send(data);
        }
        else
            return err;
    })
}

const deleteUserDetails = function(req,res){
    user.findByIdAndRemove(req.params.id,(err)=>{
        if(!err){
            console.log('user details are deleted successfully');
            res.send({
                status : 200,
                message : 'user details are deleted successfully'
            });
        }
        else
            return err;
    })
}

exports.getAllUserDetails = getAllUserDetails;
exports.getOneUserDetails = getOneUserDetails;
exports.createUserDetails = createUserDetails;
exports.updateUserDetails = updateUserDetails;
exports.deleteUserDetails = deleteUserDetails;
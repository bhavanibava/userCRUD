const express = require('express');
const router = express.Router();
const userOperations = require('../resource/userOperations');

router.get('/',function(req,res){
    userOperations.getAllUserDetails(req,res);
})
router.get('/:email',function(req,res){
    userOperations.getOneUserDetails(req,res);
})
router.post('/',function(req,res){
    userOperations.createUserDetails(req,res);
})
router.put('/:id',function(req,res){
    userOperations.updateUserDetails(req,res);
})
router.delete('/:id',function(req,res){
    userOperations.deleteUserDetails(req,res);
})
module.exports = router;
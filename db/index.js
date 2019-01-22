const mongoose = require('mongoose');
const URL = "mongodb://localhost:27017/userDetails";
mongoose.connect(URL,(err)=>{
    if(!err){
        console.log('database connected successfully');
    }
    else{
        console.log('error from mongoDB : ',err);
    }
});
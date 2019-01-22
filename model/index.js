const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = new Schema({
    userName : {
        type : String,
        required : true
    },
    emailId : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('user',user);
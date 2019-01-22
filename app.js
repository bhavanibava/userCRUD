const express = require('express');
const app = express();
const port = '3000';
const db = require('./db/index');
const user = require('./routes/user');
app.use(express.json());
app.use(express.urlencoded({extends : true}));
app.use('/user',user);

app.listen(port,()=>{
    console.log('listening on port : ',port);
})

module.exports = app;
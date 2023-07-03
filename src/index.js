const express = require('express');
const bodyParser = require('body-parser')
const route = require('./route/route')

require('dotenv').config()

const {PORT, MONGODB_STRING} = process.env
const app= express();
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));


mongoose.connect(MONGODB_STRING,{
    useNewUrlParser : true
})
.then(()=>console.log("you are now connected to MongoDB"))
.catch(err=> console.log(err))

app.use('/',route);

app.listen(PORT,function(){
    console.log('the app is running at port '+(PORT));
});

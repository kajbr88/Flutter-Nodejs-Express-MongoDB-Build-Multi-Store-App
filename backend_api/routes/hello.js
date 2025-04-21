const express = require('express');

const helloRoute = express.Router(); //initializing the router

//creating a route
helloRoute.get('/hello', (req,res)=>{
    res.send('hello world');
})

module.exports = helloRoute;//export it
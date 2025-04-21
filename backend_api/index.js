//import the express module
const express = require('express');
// accessing or importing the route
const helloRouter = require('./routes/hello');
//mongoose is and intermediary, we use mongoose to interact with mongodb.
const mongoose = require('mongoose');


//the reason for this port is to define where the server will run or
//define the port number the server will listen on.
const PORT = 3000;

//Intialize the express or start using the express or
// create an instance of an express application because it gives us the starting point.
const app = express();

// mongodb string
const DB = "mongodb+srv://<username>:<password>@cluster0.o2boh3r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

//middleware - to register route or to mount route in order to be recognized. 
app.use(helloRouter);

mongoose.connect(DB)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// app.get("/hello",(req,res)=>{//req allows you to access data sent by the client e.g. form data 
//     res.send('Hello world');
// })

//start/run the server and listen on the specified port.
app.listen(PORT, "0.0.0.0", function(){ //specifying 0.0.0.0 will allow all networks to be able to access this specific port.
    // if the server is successfully created or started then we can log something.
    console.log(`server is running on port ${PORT}`);
})
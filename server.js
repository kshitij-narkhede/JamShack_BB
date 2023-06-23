// import { createDocument } from "./models";

const express = require("express");
const  mongoose = require("mongoose");
const app = express();

const createDocument = require('./models.js');
// Database 
const database = module.exports = () => {
  const connectionParams  = {
    useNewUrlParser :true,
    useUnifiedTopology:true,
    
  }

  try{
    mongoose.connect('mongodb+srv://sharvil:sharvil123@jamshack-hackathon.lnxdgxj.mongodb.net/hackathon?retryWrites=true&w=majority');
    console.log('Database connected sucessfully');
    createDocument();
  }
  catch(error){
    console.log(error);
    console.log('Database connection failed!');
  }
} 

database();

app.listen(5000, () => {
  console.log("Server is running at port 5000");
});



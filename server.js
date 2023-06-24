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
    // const createDocument = require('./models.js');
    // createDocument();
    app.post('/signup', async (req, res) => {
      const { firstname, lastname,email,phoneno,age,Address,City,zipcode,password } = req.body;
    
      try {
        const createDocument = require('./models.js');
    // createDocument();
        await createDocument(firstname, lastname,email,phoneno,age,Address,City,zipcode,password );
        res.send('Signup successful!');
      } catch (error) {
        console.error('Error signing up:', error);
        res.send('Error signing up');
      }
    });
  }
  catch(error){
    console.log(error);
    console.log('Database connection failed!');
  }
} 

database();

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});



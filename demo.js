// const express = require('express');
const bodyParser = require('body-parser');
// // const bcrypt = require('bcrypt');
// const mongoose = require('mongoose');
// const fs = require('fs');

const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const { kStringMaxLength } = require('buffer');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
const database = module.exports = () => {
    const connectionParams  = {
      useNewUrlParser :true,
      useUnifiedTopology:true,
      
    }
}





// Connection
try{
    mongoose.connect('mongodb+srv://rutuja:rutuja123@jamshack-hackathon.lnxdgxj.mongodb.net/hackathon?retryWrites=true&w=majority');
    console.log('Database connected sucessfully');

    
    const Product = require('./models.js');

    app.get('/', (req, res) => {
        Product.find({})
    .exec()
    .then(movies => {
      res.render('index', {
        moviesList: movies
      });
    })
    

});
}
catch(error){
  console.log(error);
  console.log('Database connection failed!');
}


database();

app.listen(3000, () => {
console.log("Server is running at port 3000");
});

const express = require('express');
const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const fs = require('fs');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


const database = module.exports = () => {
    const connectionParams  = {
      useNewUrlParser :true,
      useUnifiedTopology:true,
      
    }
}

try{
    mongoose.connect('mongodb+srv://rutuja:rutuja123@jamshack-hackathon.lnxdgxj.mongodb.net/hackathon?retryWrites=true&w=majority');
    console.log('Database connected sucessfully');



    app.get('/sign_up', (req, res) => {
      fs.readFile('sign_up.html', 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading sign_up.html:', err);
          res.status(500).send('Internal Server Error');
          return;
        }
    
        res.send(data);
      });
    });


  app.post('/sign_up', async (req, res) => {
      // const { model_name, category,physical_condition,warranty,date_of_purchase,color,dimension,quantity,price,description } = req.body;
    
      var fname = req.body.fname;
      var lname =req.body.lname;
      var age = req.body.age;
      var email =req.body.email;
      var password = req.body.password;
      var phone =req.body.phone;
      var address= req.body.address;
      var city =req.body.city;
      var zipcode = req.body.zipcode;


      try {
        
          const createSignup = require('./models.js');
          createSignup(fname, lname,age,email,password,phone,address,city,zipcode);
    
        res.send('Signup successful!');
      } catch (error) {
        console.error('Error signing up:', error);
        res.send('Error signing up');
      }
    });
    
/******************* Login ***************************/

app.get('/login', (req, res) => {
  fs.readFile('login.html', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading login.html:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    res.send(data);
  });
});

app.post('/login', async (req, res) => {

  try {
    var email = req.body.email;
      var password=req.body.password;
      const Signup = require('./models.js');
      const user = await Signup.findOne({ email })


      if (user) {
  
        if (password === user.password) {
          res.send('Login successful!');
        } else {
          res.send('Invalid password!');
        }
      } else {
        res.send('User not found!');
      }
  } 
  
  catch (e) {

      res.send("wrong details")
      

  }


})






  /**************** SELL   ************************************************************************************************************** */

    // app.get('/sell', (req, res) => {
    //     res.send(`
    //     <form method="POST" action="/sell">
    //     <label for="model">Model Name:</label>
    //     <input class="inputstyle" type="text" id="model" name="model_name" required ><br>

    //     <label for="category">Category:</label>
    //     <select class="inputstyle" id="category" name="category" required>
    //         <option value="category1">Category 1</option>
    //         <option value="category2">Category 2</option>
    //         <option value="category3">Category 3</option>
    //     </select><br><br>

    //     <label for="condition">Physical Condition:</label>
    //     <select class="inputstyle" id="condition" name="physical_condition" required>
    //         <option value="new">New</option>
    //         <option value="used">Used</option>
    //         <option value="refurbished">Refurbished</option>
    //     </select><br><br>

    //     <label for="warranty">Warranty Status:</label>
    //     <select class="inputstyle" id="warranty" name="warranty" required>
    //         <option value="underWarranty">Under Warranty</option>
    //         <option value="outOfWarranty">Out of Warranty</option>
    //         <option value="noWarranty">No Warranty</option>
    //     </select><br><br>

    //     <label for="year">Date of Purchase:</label>
    //     <input class="inputstyle" type="text" id="datepicker" name="date_of_purchase" required><br><br>

    //     <label for="color">Color:</label>
    //     <input class="inputstyle" type="text" id="color" name="color" required><br><br>

    //     <label for="dimension">Dimensions:</label>
    //     <input class="inputstyle" type="text" id="dimension" name="dimension" required><br><br>

    //     <label for="quantity">Quantity:</label>
    //     <input class="inputstyle" type="text" id="quantity" name="quantity" step="1" required><br><br>

    //     <!-- <label for="photos">Photos:</label>
    //     <input type="file" id="photos" name="photos" required><br><br> -->

    //     <!-- <label for="sellRent">Sell/Rent:</label>
    //     <input type="radio" id="sell" name="sellRent" value="sell" required>
    //     <label for="sell">Sell</label>
    //     <input type="radio" id="rent" name="sellRent" value="rent" required>
    //     <label for="rent">Rent</label><br><br> -->

    //     <label for="price">Price:</label>
    //     <input class="inputstyle" type="text" id="price" name="price" required><br><br>

    //     <label for="description">Description:</label>
    //     <input class="inputstyle" type="text" id="description" name="description" required><br>

    //     <input type="submit" class="btn" value="Submit">
    // </form>
    //     `);
    //   });


    app.get('/sell', (req, res) => {
        fs.readFile('sellform.html', 'utf8', (err, data) => {
          if (err) {
            console.error('Error reading sellform.html:', err);
            res.status(500).send('Internal Server Error');
            return;
          }
      
          res.send(data);
        });
      });


    app.post('/sell', async (req, res) => {
        // const { model_name, category,physical_condition,warranty,date_of_purchase,color,dimension,quantity,price,description } = req.body;
      
        var model_name = req.body.model_name;
        var category =req.body.category;
        var physical_condition = req.body.physical_condition;
        var warranty =req.body.warranty;
        var date_of_purchase = req.body.date_of_purchase;
        var color =req.body.color;
        var dimension = req.body.dimension;
        var quantity =req.body.quantity;
        var price = req.body.price;
        var description =req.body.description;


        try {
          
            const createProduct = require('./models.js');
            createProduct(model_name, category,physical_condition,warranty,date_of_purchase,color,dimension,quantity,price,description);
      
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


database();

app.listen(3000, () => {
console.log("Server is running at port 3000");
});
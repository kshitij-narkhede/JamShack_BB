// Some required imports

// const express = require('express');
const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');
// const mongoose = require('mongoose');
const fs = require('fs');
const path=require('path');


const { createProduct, Product, createSignup ,Signup } = require('./models.js');







//  ************************************ Payment Gateway *************************************************************//

const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const { kStringMaxLength } = require('buffer');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public/'));

var Publishable_Key = 'pk_test_51NN9fBSI90304Yamaxa65rmRDkvAmeR4h2kaOOtUeMdrFXpDkg58iAQtAlG2bVTpuXCIFSjjp8wd8i45x8y07BPX003MWhB4CF'
var Secret_Key = 'sk_test_51NN9fBSI90304YamaLo78Fi6vQS605Edtibzcm3DOVT2bxFoP72jGxlffdpCWUSEsN5dwghtUnZvzxis6pgRdAOz00LAJIH1rJ'

const stripe = require('stripe')(Secret_Key)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.get('/payment_gateway', function(req, res){
  res.render('home', {
     key: Publishable_Key
  })
})

app.post('/payment', function(req, res){
  // Moreover you can take more details from user
  // like Address, Name, etc from form
  stripe.customers.create({
      email: req.body.stripeEmail,
      source: req.body.stripeToken,
      name: 'Gourav Hammad',
      address: {
          line1: 'TC 9/4 Old MES colony',
          postal_code: '452331',
          city: 'Indore',
          state: 'Madhya Pradesh',
          country: 'India',
      }
  })
  .then((customer) => {

      return stripe.charges.create({
          amount: 2500,     // Charging Rs 25
          description: 'Web Development Product',
          currency: 'INR',
          customer: customer.id
      });
  })
  .then((charge) => {
      res.send("Success")  // If no error occurs
  })
  .catch((err) => {
      res.send(err)       // If some error occurs
  });
})

app.listen(5000, function(error){
  if(error) throw error


// ********************************************************** Database Connnection ********************************************************//
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

    // const getProduct = require('./models.js');
    // getProduct();


    //****************************************Fetching the card details****************************************************************//

    app.get('/details/:id', (req, res) => {
      const cardId = req.params.id; // Get the card ID from the route parameters
    
      // const Product = require('./models.js');

      // Fetch the card information from MongoDB using the cardId
      Product.findById(cardId)
        .exec()
        .then(data => {
          res.render('product', {
            card: data
          });
        })
        .catch(error => {
          console.error('Error fetching card details:', error);
          res.status(500).send('Internal Server Error');
        });
    });

    



    // const Product = require('./models.js');

    app.get('/', (req, res) => {
        Product.find({})
    .exec()
    .then(data => {
      res.render('index', {
        dataList: data
      });
    })
  });


  app.get('/buy', (req, res) => {
    Product.find({sellorrent:"Sell"})
.exec()
.then(data => {
  res.render('buy', {
    dataList: data
  });
  console.log(data);
})
});

app.get('/rent', (req, res) => {
  Product.find({sellorrent:"Rent"})
.exec()
.then(data => {
res.render('rent', {
  dataList: data
});

})
});


//***************************************************SignUp Function************************************************************************* //

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
        
          // const createSignup = require('./models.js');
          createSignup(fname, lname,age,email,password,phone,address,city,zipcode);
    
        res.send('Signup successful!');
        var u_id = Product.find({"fname":fname},{_id:1}); 
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
      // const Signup = require('./models.js');
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


    const multer = require('multer')
    const path = require('path')
    var router = express.Router();

    router.use(express.static(__dirname+'./public/'));

    var Storage = multer.diskStorage({
      destination:"./public/users",
      filename:(req,file,cb) =>{ 
        cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
       }
    })


    var upload  = multer({
      storage:Storage
    }).single('photos')


    app.get('/sell', (req, res) => {
        fs.readFile('sellform.html', 'utf8', (err, data) => {
          if (err) {
            console.error('Error reading sellform.html:', err);
            res.status(5000).send('Internal Server Error');
            return;
          }
      
          res.send(data);
        });
      });


    app.post('/sell',upload,async (req, res,next) => {
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
        var photosurl = req.file.filename;
        var sellorrent = req.body.sellorrent;

        try {
          
            // const createProduct = require('./models.js');
            createProduct(model_name, category,physical_condition,warranty,date_of_purchase,color,dimension,quantity,price,description,photosurl,sellorrent);
      
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

app.listen(8080, () => {
console.log("Server is running at port 3000");
});

}); 
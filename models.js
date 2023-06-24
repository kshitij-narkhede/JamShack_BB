const res = require("express/lib/response");
const mongoose   = require("mongoose");
const { ObjectId, Decimal128 } = require("mongodb");

// ************************      For sell form  *******************************************************

const productSchema = new mongoose.Schema({
    model_name: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    physical_condition: {
        type: String,
        required: true
      },
      warranty: {
        type: String,
        required: true
      },
      date_of_purchase: {
        type: String,
        required: true
      },
      color: {
        type: String,
        required: true
      },
      dimension: {
        type: String,
        required: true
      },
      quantity: {
        type: String,
        required: true
      },
      price: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
  });


  const Product = new mongoose.model("products",productSchema);


  const createProduct  = async(model_name, category,physical_condition,warranty,date_of_purchase,color,dimension,quantity,price,description) => {
    try{

        const products_details = new Product(
            {
                
                "model_name":model_name,
                "category":category,
                "physical_condition": physical_condition,
                "warranty":warranty,
                "date_of_purchase":date_of_purchase,
                "color":color,
                "dimension":dimension,
                "quantity":quantity,
                "price":price,
                "description":description,
                  
            }
            )
            
            const result = await products_details.save();
            console.log(result);
    }catch(e){console.log(e);}
}

// createDocument();

module.exports = createProduct;







const signupSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  age: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    zipcode: {
      type: String,
      required: true
    },
    
});


const Signup = new mongoose.model("logins",signupSchema);


const createSignup  = async(fname, lname,age,email,password,phone,address,city,zipcode) => {
  try{

      const signup_details = new Signup(
          {
              
              "fname":fname,
              "lname":lname,
              "age": age,
              "email":email,
              "password":password,
              "phone":phone,
              "address":address,
              "city":city,
              "zipcode":zipcode,
                
          }
          )
          
          const result = await signup_details.save();
          console.log(result);
  }catch(e){console.log(e);}
}

// createDocument();

module.exports = createSignup;



const res = require("express/lib/response");
const mongoose   = require("mongoose");
const { ObjectId, Decimal128 } = require("mongodb");



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


<<<<<<< HEAD

const Product = new mongoose.model("product",productSchema);
const Listing = new mongoose.model("listing",listingSchema);
const Demand = new mongoose.model("product",demandSchema);
const Wishlist = new mongoose.model("product",wishlistSchema);
const Login = new mongoose.model("login",loginSchema);
// const Order = new mongoose.model("product",ordersSchema);


 const createDocument  = async(firstname,lastname,email,phoneno,age,Address,City,zipcode,password) => {
=======
  const createProduct  = async(model_name, category,physical_condition,warranty,date_of_purchase,color,dimension,quantity,price,description) => {
>>>>>>> 9f0564bc4c38c81019e2371b1d9d02e6393014c8
    try{

        const products_details = new Product(
            {
<<<<<<< HEAD
              firstname,lastname,email,phoneno,age,Address,City,zipcode,password
=======
                
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
>>>>>>> 9f0564bc4c38c81019e2371b1d9d02e6393014c8
                  
            }
            )
            
            const result = await products_details.save();
            console.log(result);
    }catch(e){console.log(e);}
}

// createDocument();

module.exports = createProduct;

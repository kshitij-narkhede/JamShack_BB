const res = require("express/lib/response");
const mongoose   = require("mongoose");
const { ObjectId, Decimal128 } = require("mongodb");

// const demandSchema=  new mongoose.Schema({
//     u_id : ObjectId,
//     model_name :String,
//     color: String,
//     warranty:Decimal128,
//     size:{
//         height: Int16Array,
//         width:Int16Array,
//         length:Int16Array,
//     },
//     physicalcondition:String,
//     description:String,
//     quantity:Int16Array,
// })

const loginSchema = new mongoose.Schema({
    
    "email": {
      "type": "String"
    },
    "password": {
      "type": "String"
    },
    "Username": {
      "type": "String"
    },
    "Phoneno": {
      "type": "String"
    },
    "Address": {
      "type": "String"
    }
  })

// const ordersSchema=new mongoose.Schema({
//     p_id : ObjectId,
// })

// const wishlistSchema= new mongoose.Schema({
//     p_id : ObjectId,
// })

// const listingSchema = new mongoose.Schema({
//     p_id : ObjectId,
// })

// const productSchema = new mongoose.Schema({
//     p_id : ObjectId,
//     u_id : ObjectId,
//     model_name : String,
//     features: String,
//     color : String,
//     warranty : Decimal128,
//     photosurl:{
//         0:"https://unsplash.com/photos/JaiyYwT0hLA",
//     },
//     sell:Boolean,
//     rent:Boolean,
//     price:Int32Array,
//     datelisting:Date,
//     size:{
//         height: Int16Array,
//         width:Int16Array,
//         length:Int16Array,
//     },
//     physicalcondition:String,
// })


// const Product = new mongoose.model("product",productSchema);
// const Listing = new mongoose.model("product",listingSchema);
// const Demand = new mongoose.model("product",demandSchema);
// const Wishlist = new mongoose.model("product",wishlistSchema);
const Login = new mongoose.model("product",loginSchema);
// const Order = new mongoose.model("product",ordersSchema);


 const createDocument  = async() => {
    try{

        const user_login = new Login(
            {
                email: "sharvilnichat@gmail.com",
                password:"123",
                username:"Shark11",
                phoneno:"9865487515",
                address:"Gokul Nagar,Pune",
            }
            )
            
            const result = await user_login.save();
            console.log(result);
    }catch(e){console.log(e);}
}

createDocument();



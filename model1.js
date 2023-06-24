const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://rutuja:rutuja123@jamshack-hackathon.lnxdgxj.mongodb.net/hackathon?retryWrites=true&w=majority")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const LogInCollection=new mongoose.model('LogInCollection',logInSchema)

module.exports=LogInCollection
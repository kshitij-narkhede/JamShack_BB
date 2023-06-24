// var express=require("express");
// var bodyParser=require("body-parser");

// const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://sharvil:sharvil123@jamshack-hackathon.lnxdgxj.mongodb.net/hackathon?retryWrites=true&w=majority');
// var db=mongoose.connection;
// db.on('error', console.log.bind(console, "connection error"));
// db.once('open', function(callback){
// 	console.log("connection succeeded");
// })

// var app=express()


// app.use(bodyParser.json());
// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({
// 	extended: true
// }));

// app.post('/sign_up', function(req,res){
// 	var firstname = req.body.firstname;
// 	var lastname = req.body.lastname;
// 	var email =req.body.email;
// 	var password = req.body.password;
// 	var phoneno =req.body.phoneno;
// 	var age =req.body.age;
// 	var zipcode =req.body.zipcode;
// 	var City =req.body.City;
// 	var Address =req.body.Address;

// 	var data = {
// 		"firstname": firstname,
// 		"lastname": lastname,
// 		"email":email,
// 		"password":password,
// 		"phoneno":phoneno,
//     "Address":Address,
// 		"City": City,
// 		"zipcode": zipcode,
//     "age":age,
// 	}
// db.collection('login').insertOne(data,function(err){
// 		if (err) throw err;
// 		console.log("Record inserted Successfully");
			
// 	});
		
// 	return res.redirect('index.html');
// })


// app.get('/sign_up',function(req,res){
// res.set({
// 	'Access-control-Allow-Origin': '*'
// 	});
// return res.redirect('sign_up.html');
// }).listen(3000)


// console.log("server listening at port 3000");

//jshint esversion:6
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
// tang tinh bao mat cau mat khau
const encrypt = require('mongoose-encryption')
//hash function ko cho hacker khong chuyen doi ma code tro lai duoc
const md5 = require("md5")

const app = express();
//console.log(process.env.API_KEY);
//console.log(md5(1234));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/secrets', {
     useUnifiedTopology: true, 
     useNewUrlParser: true,
      });

const userSchema = new mongoose.Schema({
 email: String,
 password: String
});
//Doan code nay dung de ma hoa mat khau tranh bi hack 
//https://www.npmjs.com/package/mongoose-encryption
const secret = process.env.SECRET;
userSchema.plugin(encrypt, { secret: secret,encryptedFields: ['password'] });

const User = mongoose.model('User', userSchema);

app.get("/", (req, res)=> {
     res.render("home");
})
app.get("/login", (req, res)=> {
     res.render("login");
})
app.get("/register", (req, res)=> {
     res.render("register");
})
app.get("/submit", (req, res)=> {
     res.render("submit");
})

app.post("/register", (req, res)=> {
     const newUser = new User({
          email: req.body.username,
          password: req.body.password
     })
     console.log('register' + newUser.password);
     

     newUser.save().then(()=>{
          res.render("secrets");
      }).catch((err)=>{
          console.log(err);
      })
})

app.post("/login", (req, res)=>{
     const username = req.body.username;
     const password = req.body.password;
     console.log(username);

     User.findOne({email: username}).then((err, foundUser) => {
          if(!err){
               console.log(err);
          }else {
               if (foundUser) {
                    if(foundUser.password === password) {
                         res.render("home");
                    }
               }
          }
     });
})










app.listen("3000", (req, res)=>{
     console.log("Server starting at port 3000");
})
//jshint esversion:6
//install express module
const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
let port = 3000;

//__dirname: de tim den duong dan cua file index

app.get('/', function(req, res){
     res.sendFile(__dirname + "/index.html");
})
app.post("/", function(req, res){
     let n1 = Number(req.body.n1);
     let n2 = Number(req.body.n2);
     let rs = n1 + n2;
     
     res.send("this is result " + rs)
});

app.get('/bmi', function(req, res){
     res.sendFile(__dirname + "/bmi.html");
})
app.post('/bmi', function(req, res){
     let w =parseFloat(req.body.weight);
     let h =parseFloat(req.body.height);
     let bmi =  w / Math.pow(h, 2);
     res.send("This is your bmi is: " + bmi);
})



app.listen(port, function(){
     console.log(`this is port ${port}`);
})
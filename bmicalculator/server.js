const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
let port = 3000;

app.get("/", function(req, res){
     res.sendFile(__dirname +"/bmi.html")
})

app.post('/', function(req, res){
     let w = Number(req.body.weight);
     let h = Number(req.body.height);
     let bmi =  (w / Math.pow(h, 2)) * 10000;
     res.send("This is your bmi " + bmi);
})



app.listen(port, function(req, res){
console.log('This is port 3000');

})
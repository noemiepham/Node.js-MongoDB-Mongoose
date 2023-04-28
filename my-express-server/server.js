//jshin esversion:6
const express = require('express')
const app = express()
const port = 3000

app.get('/',function(req, res){
     res.send('<h1>Hello World</h1>');
} )

app.get('/contact', function(req, res){
     res.send('<h2>Noemie@gmail.com</h2>');
})
app.get('/about', function(req, res){
     res.send("<h2>I am a Developer web</h2>");
})
app.get('/blog', function(req, res){
     res.send("<div><ul><li>my blog</li></ul></div>");
})

app.listen(port, function(){
     console.log("server is 3000");
})
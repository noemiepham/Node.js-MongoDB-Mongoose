const express = require("express");
const bodyParser = require("body-parser");

const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();

mongoose.set('strictQuery', true);
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));
mongoose.connect('mongodb://127.0.0.1:27017/wikiDB', {
  useNewUrlParser: true
});

//TODO

const articleSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Article = mongoose.model('Article', articleSchema);


/************************** request article ************************/
app.route("/articles")
  .get((req, res) => {
    Article.find(function (err, foundArticles) {
      if (!err) {
        res.send(foundArticles);
      } else {
        res.send(err);
      }
    })
  })

  .post((req, res) => {
    const newContent = new Article({
      title: req.body.title,
      content: req.body.content
    });
    newContent.save(function (err) {
        if (!err) {
          res.send("ok")
        } else {
          res.send(err);
        }
      })
      .delete((req, res) => {
        Article.deleteMany(function (err) {
          if (!err) {
            res.send("ok ")
          } else {
            res.send(err)
          };
        })
      })
  })
/************************** request article/jack-bauer ************************/
app.route("/articles/:articlesTitle")
     .get(function(req,res){
         
          Article.findOne({title:req.params.articlesTitle },
               function(err, foundArticles) {
               if(foundArticles){
                    res.send(foundArticles)
               }else{
                    res.send("no article")
               }
          })
     .put((req, res)=> {
          console.log('hello');
          
     })
  })

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

const express = require("express");
const bodyParse = require('body-parser')



const app = express();
app.set('view engine', 'ejs');
app.use(bodyParse.urlencoded({extended:true}))

let items = ["eat", "drink", "sleep"];

app.get('/', (req, res) => {
      let today = new Date();
      let options = {
        weekday: "long",
        day: "numeric",
        month: 'long',
        year: 'numeric'
      };
      let day = today.toLocaleDateString("en-US", options);
      res.render('list', {day: day, newItems: items})
    });

    app.post('/', (req, res) => {
      let newItem = req.body.item;
      items.push(newItem);
      res.redirect("/");
    });

    app.listen(3000, () => {
      console.log('App listening on port 3000!');
    });

const express = require('express');
const bodyParse = require('body-parser');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParse.urlencoded({extended:true}))

let today = new Date();
let option = {
     weekday:"long",
     day: "numeric",
     month:"long",
     year:"2-digit"
}
let day = today.toLocaleString("en-US", option)
let items = ["hello", "noemie"]

app.get('/', (req, res) => {
    res.render('list', {currentDay: day, item:items});
});


app.post('/', (req, res) => {
     let newItem = req.body.item;
     items.push(newItem);
     res.redirect("/")
});




app.listen(3000, () => {
     console.log('App listening on port 3000!');
});
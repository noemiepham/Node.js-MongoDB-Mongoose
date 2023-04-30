const {response} = require("express");
const express = require("express");
const bodyParse = require("body-parser");

const https = require("https");
const app = express();

app.use(bodyParse.urlencoded({
  extended: true
})) //this code just for start parsing through the body of the post request

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.post("/", function (req, res) {
  //  console.log(req.body.cityName);
  const city = req.body.cityName;
  const apikey = "e0acae74ca58e3f3c8f407b0dff3451f"
  const unit = "metric"

  const url = "https://api.openweathermap.org/data/2.5/weather?appid=" + apikey + "&units=" + unit + "&q=" + city + ""
  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on("data", function (data) {
      const wetherData = JSON.parse(data); // dinh dang lai file json
      const description = wetherData.weather[0].description;
      const temp = wetherData.main.temp;
      const icon = wetherData.weather[0].icon;
      const url = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
      res.write("<p>The weather is currently" + description + "</p>")
      res.write("<h1>The temp in " + city + temp + " degress Celcius.</h1>")
      res.write("<img src=" + url + ">")
      res.send()

    })
  })
})




app.listen(3000, function () {
  console.log('Server is running on port 3000');

})


//API key
// e0acae74ca58e3f3c8f407b0dff3451f
//unique id
// 5f6500ec6b.
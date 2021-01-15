const express = require("express");
const app = express();
const port = 3000;
const https = require('https');
const bodyPraser = require('body-parser');
app.use(bodyPraser.urlencoded({ extended: false }));

app.get("/",(req,resp)=>{
resp.sendFile(__dirname+"/index.html");
});

app.post("/",(req,resp)=>{
  const endPoint = "https://api.openweathermap.org/data/2.5/weather?";
  const apiKey = "appid=f823f623f1bdf2041e7c7072822dc626";
  var city = "q=Bengaluru,IND";
  var units = "units=imperial";
  city = "q="+req.body.cityName+",IND";
  const url = endPoint+city+"&"+units+"&"+apiKey;
  console.log(url);
  https.get(url,(response)=>{;
    response.on('data',(data)=>{
        var output = JSON.parse(data);
        resp.write("<h1>The weather is currently <i>"+output.weather[0].description+"</i></h1>");
        resp.write("<h1>The temperatue in "+ req.body.cityName +" is <i>"+output.main.temp+"</i> degree celsious</h1>");
        resp.write('<img src= http://openweathermap.org/img/wn/'+output.weather[0].icon+'@2x.png alt="Weather image">');
        resp.send();
    });
  });
});
app.listen(port,()=>{
  console.log("Server started a port:"+port);
});

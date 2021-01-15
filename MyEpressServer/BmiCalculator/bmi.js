const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

app.get("/", (req,resp)=>{
  resp.sendFile(__dirname+"/index.html");
});

app.post("/",(req,resp)=>{
  console.log(req.body);
  var hight = req.body.height;
  var weight = req.body.weight;
  hight = Number(hight);
  console.log(hight);
  weight = Number(weight);
  var result =  weight/(hight*hight);
  resp.send("BMI is:"+result);
});
app.listen(port,()=>{
  console.log("Listning on port:"+port);
});

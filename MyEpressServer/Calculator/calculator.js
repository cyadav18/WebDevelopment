const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3005;
app.use(bodyParser.urlencoded({extended: true}));

app.get("/" ,(req,resp) =>{
  console.log(__dirname);
  resp.sendFile(__dirname+"/index.html");
});

app.post("/" , (req,resp)=>{
  console.log(req.body);
  var num1 = req.body.num1;
  var num2 = req.body.num2;
  num1 = Number(num1);
  num2 = Number(num2);
  resp.send("result is "+(num1+num2));
});

app.listen(port, () =>{
  console.log("starting server on "+port);
});

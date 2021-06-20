const express = require('express');
fs = require('fs');
const app = express();
// const port = 3000

app.get('/',(req,resp) =>{
  resp.send("<h1><i>Hello World!</i></h1>");
});

app.get('/cotact',(req,resp) =>{
  resp.send("<h1><i>chethanyadav5@gmail.com</i></h1>");
});


app.listen(3000, function (){
  console.log("Server started on port 3000");
})

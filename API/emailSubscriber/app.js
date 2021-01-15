const express = require('express');
const app = express();
const port = "3000";

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const mailchimp = require('@mailchimp/mailchimp_marketing');
const listId = "ebed1e42af";

app.use(express.static("public")); // to pass static file paths

app.get("/",(req,resp)=>{
  resp.sendFile(__dirname+"/signUp.html");
});


app.post("/",(req,resp)=>{
  const subscribingUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.emailID
  };
  async function run() {

  try{
    mailchimp.setConfig({
        apiKey: '4ce1e1fd69298dd45b7d9983037a8fc4-us7',
        server: 'us7',
    });
      const response = await mailchimp.lists.addListMember(listId, {
        email_address: subscribingUser.email,
        status: "subscribed",
        merge_fields: {
          FNAME: subscribingUser.firstName,
          LNAME: subscribingUser.lastName
        }
      });
      console.log(
          `Successfully added contact as an audience member. The contact's id is ${
            response.id
          }.`
        );
      resp.sendFile((__dirname+"/sucess.html"));
  }catch(err) {
      resp.sendFile((__dirname+"/failur.html"));
    }
  }

  run();

});
app.post("/failure",(req,resp)=>{
  resp.redirect("/");
});
app.listen(port,()=>{
  console.log("Localhost running on port:"+port);
})

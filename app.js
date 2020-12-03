const express = require("express")
const bodyParser = require("body-parser")
const joke = require('awesome-dev-jokes');
// const request =require ("request")
const app = express()
app.set("view engine", 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
var siku=["buy food", "cook food"];

app.get('/', function(request, response) {

var options = { weekday: 'long',  month: 'long', day: 'numeric' };
var today  = new Date();

var day=today.toLocaleDateString("en-US", options);
  response.render("list", {SAMPLE:day, NEWLIST:siku});
})
app.post("/", function(request, response){
  var newItem=(request.body.list);
  console.log(newItem);
  siku.push(newItem);
  response.redirect("/");

})
app.get ("/about", function(request, response){
  var fun =joke.getRandomJoke();
  response.render("test");
})




app.listen(process.env.PORT || 3000, function() {
  console.log("server started");
})

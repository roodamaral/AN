// require express and path
var express = require("express");
var path = require("path");

// create the express app
var app = express();
// require bodyParser since we need to handle post data for adding a user
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// static content 
app.use(express.static(path.join(__dirname, './client/dist')));
// setting up ejs and our views folder
require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);



// routes_setter(app);


app.listen(5200, function() {
  console.log("listening on port 5200");
})

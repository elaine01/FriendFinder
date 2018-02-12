var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
 
var app = express();
var PORT = process.env.PORT || 8080;
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

require('./app/routing/htmlRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, function() {
	console.log("App listening on Port: " + PORT);
})
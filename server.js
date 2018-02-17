var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var apiRoutes = require('./app/routing/apiRoutes.js');
var htmlRoutes = require('./app/routing/htmlRoutes.js');
 
var app = express();
var PORT = process.env.PORT || 8080;
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());
app.use(express.static('app/public'));

apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, function() {
	console.log("App listening on Port: " + PORT);
});
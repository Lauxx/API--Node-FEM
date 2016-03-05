// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
var express = require('express');
var app = express();
var jsonData = {count: 12, message: 'hey'};

var port = process.env.PORT || 8000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function (req, res){
	res.render('index')
});

app.get('/data', function (req, res){
	res.json(jsonData)
});


app.listen(port); 
console.log("cash money on " + port);


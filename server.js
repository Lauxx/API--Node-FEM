var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lion');
var router = express.Router();
var Lion = require('./models/lion');
var lionRouter = require('./routes/lions');
var port = process.env.PORT || 8000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

router.use(function (req, res, next){
	console.log('Magic is occuring');
	next();
});

router.get('/', function(req, res){
	res.json({message: 'success!'})
});
app.get('/', function(req, res){
	res.render('index')
});

app.get('/lion', function (req, res){
	Lion.find(function(err, data){
		if(err){
			console.log(err)
		} else{
			res.render('lion', {lion: data})
		}
	})
});

app.get('/data', function (req, res){
	res.json({message: 'hello there lotus'})
});

app.use('/api', lionRouter);
app.listen(port); 
console.log("cash money on " + port);

//super simple example of a server using express

var express = require('express');
var bodyParser=require('body-parser');
var app=express();
var productElastic = require('./productElastic.js');
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
	{extended:true
	}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/scripts",  express.static(__dirname + '/scripts/'));
	
app.get('/',function(req,res){
	res.sendFile(__dirname+'/searchPage.html');
	});

app.post('/productSearch',function(req,res){
	console.log('Shubham');
	/*var cb = function(hits){
	console.log("********************************"+hits);
		res.send(hits);
	}
*/
	//console.log(req.body);
	productElastic.querySearch(req.body.searchParam,res);

	});


app.listen(3000,function(){
	console.log("App Started on PORT 3000");
});



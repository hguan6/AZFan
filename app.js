var express = require('express');
var path = require("path");
var helmet = require('helmet');
var compression = require('compression');
var app = express();
app.use(helmet());
app.use(compression());

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, '/public')));
app.use("/static", express.static(path.join(__dirname, '/public/stylesheets')));
app.use("/static", express.static(path.join(__dirname, '/public/javascripts')));
app.use("/static", express.static(path.join(__dirname, '/public/images')));
app.use("/static", express.static(path.join(__dirname, '/public/html')));
//MySql
var mysql = require('mysql');
var pool = mysql.createPool({
	connectionLimit: 100,
	//local host
	host           : 'localhost',
	//host: '',
	user           : 'hguan6',
	password       : 'd17gh!!y',
	//local database
	database       : 'azfan',
	//database: 'ebdb'
	debug          : false
});

//router

function signUp(req, res){
	var query1 = "SELECT * FROM user WHERE username = '" + req.params.username + "';";
	var query2 = "INSERT INTO user (username, password) VALUES ('" + req.params.username + "', '" + req.params.password + "');";
	pool.getConnection(function(err, connection){
		if (err) {
			connection.release();
			res.json({"code" : 100, "status" : "Error in connection database."});
			return;
		}
		console.log('connected as id ' + connection.threadId);	
		/*
		connection.query(query1, function(err, rows){
			connection.release();
			if(err) {
				console.log("Select query error!");
			}
			if(rows.length > 0) res.send("User already exist!");

			connection.query(query2, function(err, rows){
				connection.release();
				if(err) {
					console.log("Insert query error!");
				}
				res.json(rows);
			});
		});
		*/
		connection.query(query1, function(err, rows){
			
			if(err) {
				connection.release();
				console.log("Select query error!");
			}
			if(rows.length > 0) {
				connection.release();
				res.send("User already exist!");
			}
			connection.query(query2, function(err, rows){
				connection.release();
				if(err) {
					console.log("Insert query error!");
				}
				res.json(rows);
			});
		});

		connection.on("error", function(err){
			res.json({"code" : 100, "status" : "Error in query."});
			return;
		});
	});
};
app.get('/', function(req, res) {
	res.render('index.html');
});
app.get('/signup/username/:username/password/:password', function(req, res) {
	signUp(req, res);
});
//listen to port
var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log('App listening on port ' + port);
});
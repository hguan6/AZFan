var express = require('express');
var bodyParser = require("body-parser");
//var session = require('express-session');
var path = require("path");
var helmet = require('helmet');
var compression = require('compression');
var app = express();
app.use(helmet());
app.use(compression());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//app.use(session({secret: 'a4f8071f-c873-4447-8ee2'}));

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, '/public')));
app.use("/static", express.static(path.join(__dirname, '/public/stylesheets')));
app.use("/static", express.static(path.join(__dirname, '/public/javascripts')));
app.use("/static", express.static(path.join(__dirname, '/public/images')));
app.use("/static", express.static(path.join(__dirname, '/public/html')));
//MySql connection information
var mysql = require('mysql');
var pool = mysql.createPool({
	connectionLimit: 100,
	//local host
	host           : 'localhost',
	//host: '',
	user           : 'hguan6',
	password       : 'd17gh!!y',
	//local database: 'azfan'
	//database: 'ebdb'
	database       : 'azfan',	
	debug          : false
});

//signUp, signIn, signOut functions---------------------------
var sess;
function signUp(req, res){	
	
	pool.getConnection(function(error, connection){
		if (error) {
			connection.release();
			res.json({"code" : 100, "status" : "Error in connection database."});
			return;
		}
		console.log('connected as id ' + connection.threadId);		
		
		var query1 = "SELECT * FROM user WHERE username = '" + req.body.username + "';";
		var query2 = "INSERT INTO user (username, password) VALUES ('" + req.body.username + "', '" + req.body.password + "');";
		connection.query(query1, function(err, rows){				
			if(err) {
				connection.release();
				console.log("Select query error!");
				res.sendStatus(500);
				return;
			}
			if(rows.length > 0) {
				connection.release();			
				console.log("User already exist!");	
				res.sendStatus(404);
				return;						
			}
			connection.query(query2, function(err, rows){
				connection.release();
				if(err) {
					console.log("Insert query error!");
					res.sendStatus(500);
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
function signIn(req, res) {
	
	pool.getConnection(function(error, connection){
		if (error) {
			connection.release();
			res.json({"code" : 100, "status" : "Error in connection database."});
			return;
		}
		console.log('connected as id ' + connection.threadId);
		
		var query = "SELECT * FROM user WHERE username = '" + req.body.username + "';";
		connection.query(query, function(err, rows){
			connection.release();
			if(err) {				
				console.log("Select query error!");
				res.sendStatus(500);
				return;
			}
			if(!rows.length) {						
				console.log("No such a user!");					
				res.sendStatus(404);				
				return;						
			}
			if(rows[0].password != req.body.password){
				res.sendStatus(203);
			}			
			res.end();
		});

		connection.on("error", function(err){
			res.json({"code" : 100, "status" : "Error in query."});
			return;
		});
	});	
}
function signOut(req, res){
	res.end();
}
//routers-------------------------------------------------
app.get('/', function(req, res) {
	res.render('index.html');
});
app.post('/signup', function(req, res) {
	signUp(req, res);
});
app.post('/signin', function(req, res) {
	signIn(req, res);
});
app.post('/signout', function(req, res) {
	signOut(req, res);
});
//listen to port
var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log('App listening on port ' + port);
});
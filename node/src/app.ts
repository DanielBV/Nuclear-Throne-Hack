import express from "express";
let app = express();
let server = require("http").Server(app);
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/../../angular/dist"));


app.get('/api/v1/todos', (req, res) => {
	// Hacer peticion SQL
	res.status(200).send({
	  success: 'true',
	  message: 'todos retrieved successfully',
	  todos: 'pipo',
	})
  });


app.get("/*",function(req,res){
	res.sendFile("index.html",{root: __dirname});
});



server.listen(process.env.PORT || 9999, function(){
	console.log("Server OK. Listening on: "+(process.env.PORT || 9999));
});


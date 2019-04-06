import express from "express";
let app = express();
let server = require("http").Server(app);
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname));
const request = require('request');


var test:any = null;
app.get('/api/weeklydata', (req, res) => {
	
	if (test===null){
		request("http://tb-api.xyz/seed/weekly", { json: true }, (err:any, apiRes:any, body:any) => {
		if (err) { return console.log(err); }
		test=body;
		console.log(body);
		console.log(body.url);
		console.log(body.explanation);
		res.status(200).send({
			success: 'true',
			weekly: body,
		});


		})
		// Hacer peticion SQL
	}else{
		res.status(200).send({
			success: 'true',
			weekly: test
		});
	}
  });


app.get("/*",function(req,res){
	res.sendFile("index.html",{root: __dirname+"dist"});
});



server.listen(process.env.PORT || 9999, function(){
	console.log("Server OK. Listening on: "+(process.env.PORT || 9999));
});


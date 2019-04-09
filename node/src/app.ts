import express from "express";
let app = express();
let server = require("http").Server(app);
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname));
const request = require('request');


var weeklyCache:any = null;
var dailyCache:any=null;

app.get('/api/weeklydata', (req, res) => {
	
	if (weeklyCache===null){
		request("http://tb-api.xyz/seed/weekly", { json: true }, (err:any, apiRes:any, body:any) => {
		if (err) { return console.log(err); }
		weeklyCache=body;
		console.log(body);
		console.log(body.url);
		console.log(body.explanation);
		res.status(200).send({
			success: 'true',
			weekly: body,
		});})
	}else{
		res.status(200).send({
			success: 'true',
			weekly: weeklyCache
		});
	}
  });


app.post('/api/played-daily', (req,res)=>{
	let seq = req.body.seq;
	let steam_id = req.body.steam_id;

	request.post('http://tb-api.xyz/get/daily', {
  json: {
	"lb":seq,
	"s":steam_id,
	"key":"kq7Qm3580XDfl1ke0USepN/KkBOc9dUT",
	"version":"99r1"
  }
}, (error:any, apiRes:any, body:any) => {
  if (error) {
    console.error(error)
    return
  }
res.status(200).send({
	played: !(Object.keys(body.entries).length===0)
});
 


})



});
  
app.get('/api/dailydata', (req, res) => {
	
	if (dailyCache===null){
		request("http://tb-api.xyz/seed/daily", { json: true }, (err:any, apiRes:any, body:any) => {
		if (err) { return console.log(err); }
		dailyCache=body;
		console.log(body);
		console.log(body.url);
		console.log(body.explanation);
		res.status(200).send({
			success: 'true',
			weekly: body,
		});
		})
	}else{
		res.status(200).send({
			success: 'true',
			daily: weeklyCache
		});
	}
  });


app.get("/*",function(req,res){
	res.sendFile("index.html",{root: __dirname+"dist"});
});



server.listen(process.env.PORT || 9999, function(){
	console.log("Server OK. Listening on: "+(process.env.PORT || 9999));
});


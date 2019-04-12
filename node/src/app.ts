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
		if (err) {
			res.status(200).send({success:0, errorString:`There was an error in the request to the tb api: ${err} `})
			return
		}
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
	console.log("Starting played-daily");
	request.post('http://tb-api.xyz/get/daily', {
  json: {
	"lb":seq,
	"s":steam_id,
	"key":"kq7Qm3580XDfl1ke0USepN/KkBOc9dUT",
	"version":"99r1"
  }
}, (error:any, apiRes:any, body:any) => {
  if (error) {
    res.status(200).send({success:0, errorString:`There was an error in the request to the tb api: ${error} `, })
    return
  }
res.status(200).send({
	success:1,
	played: !(Object.keys(body.entries).length===0)
});
 })});

app.post('/api/send/daily-initial', (req,res)=>{
	let steam_id = req.body.steam_id;
	let binary = req.body.binary;

	let header = {
    'User-Agent': 'GameMaker HTTP',
    'Accept-Encoding': "",
    
    "Host":"tb-api.xyz",
    "Cache-Control":"no-cache"
    }
		console.log("Sending pre-daily");
	request.post({url:"http://tb-api.xyz/set/daily",headers:header,json:{"key":"fKPkDl0aiTXtWygruoNDJKzl2MSPyTqg",
	"s":steam_id,"d":binary, "k":"-1"}},
		(error:any, apiRes:any, body:any)=>{
			console.log(error);
			console.log(apiRes)
			console.log("------------- body ")
			console.log(body);

				return {"success":1}

	});


});

app.post('/api/send/daily', (req,res)=>{
	let steam_id = req.body.steam_id;
	let binary = req.body.binary;
	let kills = req.body.kills;

	console.log("Sending daily");
	let header = {
    'User-Agent': 'GameMaker HTTP',
    'Accept-Encoding': "",
    
    "Host":"tb-api.xyz",
    "Cache-Control":"no-cache"
    }

	request.post({url:"http://tb-api.xyz/set/daily",headers:header, json:{"key":"fKPkDl0aiTXtWygruoNDJKzl2MSPyTqg",
	"s":steam_id,"d":binary, "k":kills.toString()} }, 
		(error:any, apiRes:any, body:any)=>{
			console.log(apiRes)
			console.log("------------- body ")
			console.log(body);

				return {"success":1}

	});
});

app.post('/api/send/weekly', (req,res)=>{
	let steam_id = req.body.steam_id;
	let binary = req.body.binary;
	let kills = req.body.kills;

	let header = {
    'User-Agent': 'GameMaker HTTP',
    'Accept-Encoding': "",
    
    "Host":"tb-api.xyz",
    "Cache-Control":"no-cache"
    }

	request.post({url:"http://tb-api.xyz/set/weekly",headers:header}, {json:{"key":"fKPkDl0aiTXtWygruoNDJKzl2MSPyTqg",
	"s":steam_id,"d":binary, "k":kills.toString()}}, 
		(error:any, apiRes:any, body:any)=>{
				return {"success":1}

	});
});


  
app.get('/api/dailydata', (req, res) => {
	
	if (dailyCache===null){
		request("http://tb-api.xyz/seed/daily", { json: true }, (err:any, apiRes:any, body:any) => {
		if (err) {res.status(200).send({success:0, errorString:`There was an error in the request to the tb api: ${err} `, });return; }
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


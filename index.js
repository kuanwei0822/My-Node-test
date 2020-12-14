const express = require('express');
const bodyParser = require("body-parser");
const MongoClient = require('mongodb').MongoClient;

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); 		// 使用 bodyParser 替 POST 傳回的資料解析
// app.use() 使用中介軟體函式

app.get("/data",function(req,res){		// get 回應字串刷新網頁
	res.send(req.query.firstName + req.query.lastName);
});

app.get("/data1",function(req,res){		// get 回應html文件
	res.sendFile(__dirname+'./page.html');
});

app.post("/data2",function(req,res){
	res.send(req.body.firstName + req.body.lastName);
});

var server = app.listen(5000,function(){
	console.log("ok")
});

// -------------------------------------------------------

// const f = require('./123.js');
// const http = require("http");
// const fs = require("fs");
// const events=require('events');

// const port = 5000;
// const host = "127.0.0.1" ;
// const em = new events.EventEmitter();
// em.on('abc',function(arg1, arg2){
// 	console.log('abc:',arg1, arg2);
// });


// const server  = http.createServer(		 // 定義伺服器
// 	function(req,res){
// 			// res.writeHead(200,'Content-Type','text/html');
// 			// 也可以寫成:
// 			// res.statusCode = 200;
// 			// res.setHeader('Content-Type','text/html');

//             if( req.url == "/"){
//             	res.writeHead(200,'Content-Type','text/html');
//             	res.write('<html><body>This is Home fssPage.</body></html>');
//             }else if(req.url == "/book"){			// 傳輸 json 字串

//             	res.writeHead(200,'Content-Type','application/json');
//             	res.write(JSON.stringify({ message: "Hello World"}));
//             	res.end();
//             }else if(req.url == "/zzz"){

//             	fs.readFile( __dirname,"page.html",function(error,data){	//傳輸 html 檔案，data為檔案內容(可能會有太大問題)
//             		if(error){
//             			res.writeHead(404,'Content-Type','text/plain');
//             			res.end("not found");
//             		}else{
//             			res.writeHead(200,'Content-Type','text/html');
//             			res.end(data);
//             		}
//             	});
//             }else if(req.url == "/write"){
//             	fs.writeFile("text.txt","123",function(error,data){		// 寫入至要寫入的檔案(沒有檔案的話會新建一個)
//             		console.log("write ok")
//             	})


//             }else if(req.url == "/add"){
//             	fs.appendFile("text.txt","456",function(error,data){		// 新增至要寫入的檔案
//             		console.log("write ok")
//             	})
//             }else if(req.url == "/event"){
//             	em.emit("abc")
//             	// X.emit觸發事件
//             }else{
//             	res.write('<html><body>Error</body></html>');
//             }
//             // fs.open 開啟檔案
//             // fs.read 開啟檔案也讀取文件
//             // fs.unlink 刪除檔案

//             // 根據傳來不同的 url 做不同回應
// 	}
// );

// server.listen(port,host,function(){
// 	console.log("OK",f.kk);
// });	
// // 監聽此伺服器
const f = require('./123.js');
const http = require("http");
const fs = require("fs");
const events=require('events');

const port = 5000;
const host = "127.0.0.1" ;
const em = new events.EventEmitter();
em.on('abc',function(arg1, arg2){
	console.log('abc:',arg1, arg2);
});


const server  = http.createServer(		 // 定義伺服器
	function(req,res){
			// res.writeHead(200,'Content-Type','text/html');
			// 也可以寫成:
			// res.statusCode = 200;
			// res.setHeader('Content-Type','text/html');

            if( req.url == "/"){
            	res.writeHead(200,'Content-Type','text/html');
            	res.write('<html><body>This is Home Page.</body></html>');
            }else if(req.url == "/book"){			// 傳輸 json 字串

            	res.writeHead(200,'Content-Type','application/json');
            	res.write(JSON.stringify({ message: "Hello World"}));
            	res.end();
            }else if(req.url == "/zzz"){
            	fs.readFile("page.html","utf-8",function(error,data){	//傳輸 html 檔案 
            		if(error){
            			res.writeHead(404,'Content-Type','text/plain');
            			res.end("not found");
            		}else{
            			res.writeHead(200,'Content-Type','text/html');
            			res.end(data);
            		}
            	});
            }else if(req.url == "/write"){
            	fs.writeFile("text.txt","123",function(error,data){		// 寫入至要寫入的檔案(沒有檔案的話會新建一個)
            		console.log("write ok")
            	})


            }else if(req.url == "/add"){
            	fs.appendFile("text.txt","456",function(error,data){		// 新增至要寫入的檔案
            		console.log("write ok")
            	})
            }else if(req.url == "/event"){
            	em.emit("abc")
            	// X.emit觸發事件
            }else{
            	res.write('<html><body>Error</body></html>');
            }
            // fs.open 開啟檔案
            // fs.read 開啟檔案也讀取文件
            // fs.unlink 刪除檔案

            // 根據傳來不同的 url 做不同回應
	}
);

server.listen(port,host,function(){
	console.log("OK",f.kk);
});	
// 監聽此伺服器



// http://127.0.0.1:5000

// 命令提示自字元:

// 請用命令提示自字元 Build : node index.js
// CTRL + C 可以停止執行，並停止佔用 address 埠 5000
// 用 Sublime 執行，則需要使用 Cancel Build 才能停止連接埠的佔用。(快捷鍵不知為何沒用)

// netstat -ano | findstr :5000
// 查詢該埠 5000 是否被占用

// 停止這個服務將這個 port 停止
// CTRL + C

// 強制砍...執行(要用查詢來找該序號停止，不建議使用)
// taskkill /F /PID ...
const express = require('express');
var app = express();


app.use(express.static("ex.html"));


var server = app.listen(5000,function(){
	console.log("ok")
});


// module.exports = function(aa,bb){
// 	this.aa = "100";
// 	this.bb = "200";
// 	this.func = function(){
// 		return this.aa + this.bb;
// 	}
// };
//module.exports = "123";
//只要，模組(程式)要給別的模組(程式)使用，必須加這個！！

var obj={
	aa : 100,
	bb : 200,
	cc : function(){
		return aa+bb;
	}
}

exports.kk = obj;

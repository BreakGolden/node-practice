var fortuneCookies = [
	"第一行",
	"第二行",
	"第三行",
	"第四行",
	"第五行"
];
 exports.getFortune = function(){
 	var idx = Math.floor(Math.random() * fortuneCookies.length);
 	return fortuneCookies[idx];
 }
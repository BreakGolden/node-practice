var express = require('express');
var app = express();
var fortune = require('./lib/fortune.js');
app.set('port',process.env.PORT || 3000);

//设置handlebars视图引擎
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

//静态资源
app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
	// res.type('text/plain');
	// res.send('Meadowlark Travel');
	res.render('home')
});

app.get('/about',function(req,res){
	// res.type('text/plain');
	// res.send('About Meadowlark Travel');

	// var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]
	// res.render('about',{fortune:randomFortune});
	res.render('about',{fortune:fortune.getFortune()});
})

//定制404页面
app.use(function(req,res){
	// res.type('text/plain');
	// res.status(404);
	// res.send('404 - Not Found');
	res.status(404);
	res.render('404');
});

//定制500页面
app.use(function(err,req,res,next){
	console.log(err.stack);
	// res.type('text/plain');
	// res.status(500);
	// res.send('500 - Server Error');
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'),function(){
	console.log('Express started on http://localhost:' + app.get('port') + ';press Ctrl-C to terminate.');
});

// var fortunes = [
// 	"第一行",
// 	"第二行",
// 	"第三行",
// 	"第四行",
// 	"第五行"
// ];
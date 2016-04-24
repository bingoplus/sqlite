var express = require('express')
var app = express()
var port = process.env.PORT || 3000
var path = require('path');
var formidable = require('formidable')
var util = require('util')


app.set('view engine','jade')
app.set('views','./views/pages/')
app.use(express.static(path.join(__dirname, 'public'))); 
app.listen(port)
console.log('sqlite started on port ' + port)

app.get('/',function(req,res){
  res.render('index')
})
app.get('/map',function(req,res){
  res.render('map')
})
app.get('/yixin',function(req,res){
  res.render('yixin')
})
app.get('/momo',function(req,res){
  res.render('momo')
})
app.get('/sinaweibo',function(req,res){
  res.render('sinaweibo')
})
app.get('/uc',function(req,res){
  res.render('uc')
})
app.get('/upload',function(req,res){
  res.render('upload')
})

app.post('/file-upload',function(req,res){
	//创建表单上传
	var form = new formidable.IncomingForm();
	//设置编辑
	form.encoding = 'utf-8';
	//设置文件存储路径
	form.uploadDir = "public/databases/map/";
	//保留后缀
	form.keepExtensions = true;
	//设置单文件大小限制    
	form.maxFieldsSize = 2 * 1024 * 1024;
	//form.maxFields = 1000;  设置所以文件的大小总和

	form.parse(req, function(err, fields, files) {
		files.name=null;
	  res.writeHead(200, {'content-type': 'text/plain'});
	  console.log("上传成功")
	  res.write('received upload:\n\n');
	  res.end(util.inspect({fields: fields, files: files}));
	});
})
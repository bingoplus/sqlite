var express = require('express')
var app = express()
var port = process.env.PORT || 3000
var path = require('path');

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
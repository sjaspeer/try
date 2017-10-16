//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public')));
//express routes
  app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index2.html'));
});
app.get('/Ethics', function(req, res){
  res.sendFile(path.join(__dirname, 'views/Ethics.html'));
});
app.get('/NeedSEO', function(req, res){
  res.sendFile(path.join(__dirname, 'views/NeedSEO.html'));
});
app.get('/Successfulblog', function(req, res){
  res.sendFile(path.join(__dirname, 'views/Successfulblog.html'));
});
app.get('/Traffic', function(req, res){
  res.sendFile(path.join(__dirname, 'views/Traffic.html'));
});
app.get('/WBG', function(req, res){
  res.sendFile(path.join(__dirname, 'views/WBG.html'));
});
app.get('/withoutSEO', function(req, res){
  res.sendFile(path.join(__dirname, 'views/withoutSEO.html'));
});
app.get('*', function(req, res){
  res.status(404).sendFile(path.join(__dirname, 'views/404.html'));
});
//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});

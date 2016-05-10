var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send('Hello world ! '); 
});

app.get('/nextfunction', function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.end();
});

app.listen(3000, function(){
   console.log('Example app listening on port 3000'); 
});
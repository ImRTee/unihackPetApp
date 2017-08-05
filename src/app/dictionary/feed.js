var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname+'/dictionary.html'));
});

app.post('/postWord',function(req,res,next) {
  console.log(req.body);
});

app.listen(3000, function() {
  console.log('server started on localhost:3000')
});

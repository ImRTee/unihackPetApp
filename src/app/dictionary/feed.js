var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();
var bodyParser = require('body-parser');

app.get('/',function(req,res,next) {
  res.sendFile(path.join(__dirname+'/dictionary.html'));
});

app.use(bodyParser.urlencoded( {
  extended:true
}));

app.use(bodyParser.json());

app.get('/test',function(req,res,next) {
  res.send('hey')
})

app.post('/postWord',function(req,res,next) {
  console.log(req.body.word);
});

app.listen(3000, function() {
  console.log('server started on localhost:3000')
});

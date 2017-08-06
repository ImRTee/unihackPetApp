var translate = require('google-translate-api');
var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Define the port to run on
app.set('port', 63342);

//app.use('/static', express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get('/',function(req,res,next) {
  res.sendFile(path.join(__dirname+'/public/index.html'))
});

// req.body.word
app.post('/translate', function (req, res, next) {
  var word = req.body.word;
  res.redirect('/translate/' + word );
});

app.get('/translate/:word', function(req,res,next) {
  var word = req.params.word
  translate(word, {to: 'en'}).then(something => {
    res.send(something.text);
}).catch(err => {
    console.error(err);
})
});


// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});


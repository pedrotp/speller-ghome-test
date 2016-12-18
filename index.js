var express = require('express');
var bodyParser = require('body-parser');
// var ApiAi = require('actions-on-google').ApiAiAssistant;

var app = express();
var port = process.env.PORT || 3000;

// express middleware setup
app.use(bodyParser.json());

app.post('/', function (req, res) {
  var arr = req.body.result.parameters.letter;
  var word = "";
  for (var i = 0; i < arr.length; i++) {
    word += arr[i];
  }
  res.status(200).json({
    "speech": word,
    "source": "apiai-speller",
    "displayText": word
  });
});

app.listen(port, function () {
  console.log('SoulScraper app listening on port ' + port + '!');
});

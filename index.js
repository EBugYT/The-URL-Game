var express = require('express');
var app = express();
var path = require('path');
var public = path.join(__dirname, 'public');
var static = path.join(__dirname, 'static');
app.get('/', function (req, res) {
  const options = {
    root: public,
  };
  res.sendFile('index.html', options);
});

app.get('/static/:p', function (req, res) {
  const options = {
    root: static,
  };
  res.sendFile(req.params.p, options);
});

app.listen(3000);

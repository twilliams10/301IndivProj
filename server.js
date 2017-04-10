// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

//IMPORTANT: the code below routes the request to a different page file (new to my project)
app.get("/spw.html", function (request, response) {
  response.sendFile(__dirname + 'public/spw.html');
});

app.get("/twizzlers.html", function (request, response) {
  response.sendFile(__dirname + 'public/twizzlers.html');
});

app.get("/dots.html", function (request, response) {
  response.sendFile(__dirname + 'public/dots.html');
});

//the original part of the file
app.get("/dreams", function (request, response) {
  response.send(dreams);
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body


// Simple in-memory store for now
var dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

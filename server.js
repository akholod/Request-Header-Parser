const express = require("express");
const route = require("./routes")
const app = express();
const routes = require('./routes');
const port = process.env.PORT || 8080;

app.use('/', routes);

app.use(function(req, res, next) {
  res.status(404).end('Not found');
});

app.listen(port, function () {
  console.log('App listening on port 8080!');
});
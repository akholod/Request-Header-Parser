const express = require("express");
const app = express();

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    
    res.send(req.headers['user-agent']);
  res.send(req.headers['accept-language']);
  res.send(req.headers['user-agent']);
   res.end('check')
})

app.use(function(req, res, next) {
  res.status(404).end('Wrong time parameter');
});

app.listen(port, function () {
  console.log('App listening on port 8080!');
});
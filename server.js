const express = require("express");
const app = express();

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    
   var str = req.header;
   res.end(str)
})

app.use(function(req, res, next) {
  res.status(404).end('Wrong time parameter');
});

app.listen(port, function () {
  console.log('App listening on port 8080!');
});
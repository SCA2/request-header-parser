const express = require('express');
const useragent = require('express-useragent');

const app = express();
const port = process.env.PORT || 8080;

app.use(useragent.express());
app.get('/api/whoami', (req, res) => {
  // console.log(req.headers);
  var info = {
    ipaddress: req.ip.match(/\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}$/)[0],
    language: req.headers['accept-language'].split(',')[0],
    software: req.useragent.os
  }
  // console.log(info);

  res.json(info);
});

app.listen(port);
console.log('Listening on port ' + port);

module.exports = app;
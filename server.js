const express = require('express');
const useragent = require('express-useragent');

const app = express();
const port = process.env.PORT || 8080;

app.use(useragent.express());

app.get('/', (req, res) => {
  res.redirect('/api/whoami');
});

app.get('/api/whoami', (req, res) => {
  var info = {
    ipaddress: req.ip.match(/\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}$/)[0],
    language: req.headers['accept-language'].split(',')[0],
    software: req.useragent.os
  }

  res.json(info);
});

app.listen(port);
console.log('Listening on port ' + port);

module.exports = app;
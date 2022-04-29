const express = require('express');
const fs = require('fs')
const https = require('https')

const config = require('./src/server/config');

const app = config(express());

//app.listen(app.get('port'), () => {
//   console.log('Servidor funcionando en puerto:', app.get('port'));
//});

https.createServer({
  cert: fs.readFileSync('server.cer'),
  key: fs.readFileSync('server.key')
}, app).listen(app.get('port'), () => {
  console.log('Servidor funcionando en puerto:', app.get('port'));
});

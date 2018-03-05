const port = 3003;

const bodyParser = require('body-parser');  // faz o parse no corpo da requisicao
const express = require('express');         // 
const server = express();                   // instanciando um novo servidor express 
const allowCors = require('./cors');

server.use(bodyParser.urlencoded({ extended: true }));  // interpetra mais dados que o urlencoded faz
server.use(bodyParser.json());                          // parse quando o corpo da requisicao for json
server.use(allowCors);

server.listen(port, function() {
  console.log(`BACKEND is running on port ${port}.`);
});

module.exports = server;
require ('react-scripts/scripts/start'); // Faz o Front-End levantar

const server = require('./config/server');
require('./config/database');

require('./config/routes')(server);
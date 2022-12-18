const http = require('http');
const routes = require('./routes');
const portNumber = 3000;

const server = http.createServer(routes);
server.listen(portNumber);


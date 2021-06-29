const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const routes = require('./routes');
const socketsFunctions = require('./socketHelper');

routes(app);
socketsFunctions(io)

module.exports = server;

module.exports = function(io) {
  io.on('connection', (socket) => {
    console.log('a user connected', socket.id);
    socket.broadcast.emit('openMessage', 'Bem-Vindo!');

    socket.on('disconnect', () => {
      console.log('user disconnected', socket.id);
    });

    socket.on('sendMessage', (msg) => {
      io.emit ('sendMessage', msg); 
    });
    
  });
};
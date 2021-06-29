module.exports = function routes(app) {
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
  });
}

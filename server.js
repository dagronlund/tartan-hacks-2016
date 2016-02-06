
var http = require('http');
var io = require('socket.io')(http);  
var port = process.env.PORT || 1337;

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port);

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function() {
  	console.log('some one disconnected');
  });
});

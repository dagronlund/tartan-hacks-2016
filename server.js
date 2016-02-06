var fs = require('fs');
var http = require('http');  
var port = process.env.PORT || 1337;

var server = http.createServer(function(req, res) {
	//console.log(req.url);
	if (req.url == '/') {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(fs.readFileSync('index.html'));
	} else {
		res.writeHead(200, { 'Content-Type': 'text/javascript' });
		var file_contents = fs.readFileSync(__dirname + req.url);
		console.log(req.url);
		console.log(file_contents);
		res.end(file_contents);
	}
});
server.listen(port);

var io = require('socket.io').listen(server);
io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('disconnect', function() {
		console.log('some one disconnected');
	});
});

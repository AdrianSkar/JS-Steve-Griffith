const http = require('http');

const server = http.createServer(function (req, res) {
	req.on('data', function (data) {
		// Handle data as it is received... for POST requests
		console.log('data event triggered: POST request');
	});
	req.on('end', function () {
		res.setHeader('Content-Type', 'application/json');
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.writeHead(200, 'OK');
		res.end('{"data": "Just a plain old JSON reply"}');
		console.log('end event triggered');
	});
});

server.listen(3000, err => {
	if (err) {
		console.log(err, 'happened');
		return;
	}
	console.log('Listening on port 3000');
});

// // Basic server:
// http
// 	.createServer(function (req, res) {
// 		res.writeHead(200, { 'Content-Type': 'text/html' });
// 		res.end('Hello World!');
// 	})
// 	.listen(8080);

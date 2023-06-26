//  ************************************ Chat Application ************************************************************//

const express = require('express');
const app = express();
const { Server } = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = new Server(server);
const port = 5000;

app.get('/chat', (req, res) => {
	res.sendFile(__dirname + '/chat.html');
});

io.on('connection', (socket) => {
	socket.on('send name', (username) => {
		io.emit('send name', (username));
	});

	socket.on('send message', (chat) => {
		io.emit('send message', (chat));
	});
});

server.listen(port, () => {
	console.log(`Server is listening at the port: ${port}`);
});

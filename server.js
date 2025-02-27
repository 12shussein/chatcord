const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');



const app = express();
const server = http.createServer(app);
const io = socketio(server);

// set static folder
app.use(express.static(path.join(__dirname, 'public folder')));

//run when client connects
io.on('connection', socket => {
    console.log('new ws connection....');
});

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
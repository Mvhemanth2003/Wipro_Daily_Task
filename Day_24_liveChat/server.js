
const express = require('express');
const http = require('http');             // Needed to attach socket.io
const { Server } = require('socket.io');  //  socket.io import

const app = express();
const PORT = 3000;

// Create HTTP server
const server = http.createServer(app);

// Create Socket.io server with CORS settings
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    }
});

// Serve static files from "public" folder
app.use(express.static('public'));

// Basic route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Socket.io connection event
io.on('connection', (socket) => {
    console.log("A user connected:", socket.id);

    // Receive message from client
    socket.on('message', (msg) => {
        io.emit('message', msg);  // Broadcast to all clients
    });

    // Disconnect event
    socket.on('disconnect', () => {
        console.log("User disconnected:", socket.id);
    });
});

// Start server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
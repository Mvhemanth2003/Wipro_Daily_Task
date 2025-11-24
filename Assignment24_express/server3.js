const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);


app.use(express.static("challenge3/public"));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "challenge3/public/chat.html"));
});

io.on("connection", (socket) => {
    console.log("User connected");

    socket.on("chatMessage", (msg) => {
        io.emit("chatMessage", msg);
    });
});

server.listen(5003, () => {
    console.log("Challenge 3 running at http://localhost:5003");
});
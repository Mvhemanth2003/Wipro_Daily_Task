const express = require('express');
const app = express();

// Default route
app.get('/', (req, res) => {
    res.send("Welcome to Express Server");
});

// Bonus route
app.get('/status', (req, res) => {
    res.json({
        server: "running",
        uptime: "OK"
    });
});

// Start server
app.listen(4000, () => {
    console.log("Server running on port 4000");
});
const express = require('express');
const app = express();

// Logging middleware
app.use((req, res, next) => {
    const time = new Date().toLocaleString();
    console.log(`[${req.method}] ${req.url} - ${time}`);
    next();
});

app.get('/products', (req, res) => {
    res.send("Products Route");
});

app.get('/status', (req, res) => {
    res.send("Status Route");
});

app.listen(4000, () => {
    console.log("Challenge 3 running on http://localhost:4000");
});
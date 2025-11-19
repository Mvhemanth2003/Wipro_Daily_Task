const express = require('express');
const app = express();
app.use(express.json());

// Middleware
app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.url}`);
    next();
});

// Import routes
const bookRouter = require('./routes/books');
app.use('/books', bookRouter);

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

// Error handler
app.use((err, req, res, next) => {
    console.log("Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
});

app.listen(4000, () => {
    console.log("Challenge 5 running on http://localhost:4000/books");
});
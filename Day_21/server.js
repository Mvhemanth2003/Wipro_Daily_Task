const express = require('express');
const app = express();

const {
    requestLogger,
    validateStudent,
    morganMiddleware,
    errorHandler
} = require('./middleware');

// Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom middleware
app.use(requestLogger);
app.use(morganMiddleware);

// Routes
app.get('/students', (req, res) => {
    res.json([{ id: 1, name: "Arjun" }]);
});

app.post('/students', validateStudent, (req, res) => {
    res.status(201).json({ message: "Student added", data: req.body });
});

// Use Error Handler
app.use(errorHandler);

// Start server
app.listen(3000, () => console.log("Server running on port 3000"));

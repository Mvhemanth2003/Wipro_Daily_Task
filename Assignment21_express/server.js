const express = require('express');
const app = express();

const logger = require('./loggingMiddleware');
app.use(logger);

app.get('/courses', (req, res) => {
    res.send("Courses list");
});

app.listen(3000,() => {
    console.log("server is starteed");
});
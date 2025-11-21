const express = require('express');
const app = express();

// Set view engine
app.set('view engine', 'ejs');

// Data
const courses = [
    { id: 1, name: "Node.js Basics" },
    { id: 2, name: "Express.js Advanced" },
    { id: 3, name: "MongoDB Mastery" }
];

// Route to render page
app.get('/courses', (req, res) => {
    res.render('courses', { courses });
});

app.listen(3000);
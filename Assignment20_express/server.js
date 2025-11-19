const express = require('express');
const app = express();
const validateCourseId = require('./middleware/validateCourseId');

app.get('/courses/:id', validateCourseId, (req, res) => {
  const id = req.params.id;

  res.json({
    id,
    name: "React Mastery",
    duration: "6 weeks"
  });
});

app.listen(4000);
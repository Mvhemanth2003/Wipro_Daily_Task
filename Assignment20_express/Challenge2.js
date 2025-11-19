const express = require('express');
const app = express();

app.get('/courses/:id', (req, res) => {
  const id = req.params.id;

  res.json({
    id: id,
    name: "React Mastery",
    duration: "6 weeks"
  });
});

app.listen(4000);
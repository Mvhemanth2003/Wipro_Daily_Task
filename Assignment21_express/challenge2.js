const express = require('express');
const app = express();

// Built-in middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/users', (req, res) => {
    res.json({
        message: "User created successfully",
        data: req.body
    });
});

app.listen(3000);

















































































































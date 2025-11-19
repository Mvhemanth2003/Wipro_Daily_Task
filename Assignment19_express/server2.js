const express = require('express');
const app = express();

app.get('/products', (req, res) => {
    const name = req.query.name;

    if (name) {
        return res.json({ query: name });   // JSON output
    } else {
        return res.send("Please provide a product name");
    }
});

app.listen(4000, () => {
    console.log("Challenge 2 running on http://localhost:4000/products");
});
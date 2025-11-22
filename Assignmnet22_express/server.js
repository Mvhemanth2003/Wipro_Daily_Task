const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(__dirname));  
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/register", (req, res) => {
    const { name, email, password, role } = req.body;
    res.send(`Registration successful for ${name}`);
});

app.listen(3000, () => console.log("Server 1 running"));
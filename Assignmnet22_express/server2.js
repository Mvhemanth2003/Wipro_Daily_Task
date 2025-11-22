const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();  

app.use(express.static(__dirname));  
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/skilltrack");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String
});

const User = mongoose.model("User", userSchema);

app.post("/register", async (req, res) => {
    const { name, email, password, role } = req.body;

    const newUser = new User({
        name,
        email,
        password,
        role
    });

    await newUser.save();
    console.log("Saved to DB:", newUser);

    res.send(`Registration successful for ${name}`);
});

app.listen(3000, () => console.log("Server 2 running"));
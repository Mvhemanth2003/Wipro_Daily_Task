const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const Form = require('./models/FormModel');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Serve the HTML file from root folder
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
});

// MongoDB Connection (Mongoose v7+)
mongoose.connect('mongodb://localhost:27017/formDB')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Route to handle form submission
app.post('/api/submit-form', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const newForm = new Form({ name, email, message });
        await newForm.save();

        res.send("Form submitted successfully!");
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});






















































































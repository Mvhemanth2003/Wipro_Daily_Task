const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const { body, validationResult } = require('express-validator');

const app = express();
const PORT = process.env.PORT || 3000;

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/formDB')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Schema
const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});
const Form = mongoose.model('Form', formSchema);

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// GET Endpoint
app.get('/api', (req, res) => {
    res.send('Hello, this is the GET endpoint!');
});

// POST Endpoint with Validation
app.post('/submit-form',
    [
        body('name').notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Valid email is required'),
        body('message').notEmpty().withMessage('Message is required')
    ],
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, message } = req.body;
        const newForm = new Form({ name, email, message });

        try {
            await newForm.save();
            res.status(201).json({ message: 'Form submitted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to submit form' });
        }
    }
);

// Success Page
app.get('/success', (req, res) => {
    res.send('Form submitted successfully!');
});

// 404 Handler
app.use((req, res, next) => {
    res.status(404).send('Sorry, we could not find that route!');
});

// Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});






















































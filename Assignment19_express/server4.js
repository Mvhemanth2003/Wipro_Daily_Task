const express = require('express');
const app = express();

app.use(express.json());

let books = [
    { id: 1, title: "1984", author: "Orwell" },
    { id: 2, title: "The Alchemist", author: "Coelho" }
];

// GET all
app.get('/books', (req, res) => {
    res.json(books);
});

// POST new
app.post('/books', (req, res) => {
    const { id, title, author } = req.body;

    if (!id || !title || !author) {
        return res.status(400).json({ error: "id, title, author are required" });
    }

    books.push({ id, title, author });
    res.json({ message: "Book added", books });
});

// PUT update
app.put('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId);

    if (!book) return res.status(404).json({ error: "Book not found" });

    const { title, author } = req.body;
    book.title = title || book.title;
    book.author = author || book.author;

    res.json({ message: "Book updated", book });
});

// DELETE
app.delete('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);

    books = books.filter(b => b.id !== bookId);

    res.json({ message: "Book deleted", books });
});

app.listen(4000, () => {
    console.log("Challenge 4 running on http://localhost:4000/books");
});











































































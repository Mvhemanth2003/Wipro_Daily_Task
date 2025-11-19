const express = require('express');
const router = express.Router();

let books = [
    { id: 1, title: "1984", author: "Orwell" },
    { id: 2, title: "The Alchemist", author: "Coelho" }
];
//get

router.get('/', (req, res) => {
    res.json(books);
});
//post
router.post('/', (req, res) => {
    const { id, title, author } = req.body;

    if (!id || !title || !author) {
        return res.status(400).json({ error: "id, title, author required" });
    }

    books.push({ id, title, author });
    res.json({ message: "Book added", books });
});
//put
router.put('/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId);

    if (!book) return res.status(404).json({ error: "Book not found" });

    const { title, author } = req.body;
    book.title = title || book.title;
    book.author = author || book.author;

    res.json({ message: "Book updated", book });
});
//delete
router.delete('/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    books = books.filter(b => b.id !== bookId);

    res.json({ message: "Book deleted", books });
});

module.exports = router;
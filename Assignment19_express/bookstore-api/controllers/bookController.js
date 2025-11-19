let books = require("../data/books");

exports.getAll = (req, res) => {
    res.json(books);
};

exports.getById = (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);

    if (!book) return res.status(404).json({ msg: "Book not found" });
    res.json(book);
};

exports.create = (req, res) => {
    const { title, author, price } = req.body;
    const newBook = {
        id: books.length + 1,
        title,
        author,
        price
    };
    books.push(newBook);
    res.json(newBook);
};

exports.update = (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);

    if (!book) return res.status(404).json({ msg: "Not found" });

    book.title = req.body.title;
    book.author = req.body.author;
    book.price = req.body.price;

    res.json({ msg: "Updated", book });
};

exports.delete = (req, res) => {
    const id = parseInt(req.params.id);
    books = books.filter(b => b.id !== id);
    res.json({ msg: "Deleted" });
};
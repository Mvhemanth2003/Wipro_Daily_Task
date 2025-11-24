const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

const storage = multer.diskStorage({
    destination: "challenge1/uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (path.extname(file.originalname) !== ".pdf") {
            return cb(new Error("Only PDF files allowed"));
        }
        cb(null, true);
    }
});

app.post("/upload", upload.single("material"), (req, res) => {
    res.send("File uploaded successfully: " + req.file.filename);
});

app.listen(5001, () => console.log("Challenge 1 running at http://localhost:5001"));
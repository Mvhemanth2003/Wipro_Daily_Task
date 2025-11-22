const express = require("express");
const rateLimit = require("express-rate-limit");

const app = express();
app.use(express.json());

// Limit: 5 requests per minute
const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 5,
    message: { error: "Too many requests" }
});

app.use(limiter);

app.get("/api/test", (req, res) => {
    res.json({ message: "Success" });
});

app.listen(3002, () => console.log("Challenge 3 running on 3002"));
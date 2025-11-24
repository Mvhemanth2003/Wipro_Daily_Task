const express = require("express");
const app = express();

app.use(express.json());

// Routes
const courseRoutes = require("./routes/courseRoutes");
const userRoutes = require("./routes/userRoutes");

app.get("/status", (req, res) => {
    res.send("App is live");
});

app.use("/api/courses", courseRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
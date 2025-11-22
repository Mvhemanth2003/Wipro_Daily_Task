const express = require("express");
const app = express();

app.use(express.json());

// In-memory data
let courses = [
    { id: 1, name: "Node JS", duration: "4 weeks" }
];

// GET
app.get("/api/courses", (req, res) => {
    res.json(courses);
});

// POST
app.post("/api/courses", (req, res) => {
    const newCourse = {
        id: courses.length + 1,
        name: req.body.name,
        duration: req.body.duration
    };
    courses.push(newCourse);
    res.json(newCourse);
});

// PUT
app.put("/api/courses/:id", (req, res) => {
    const course = courses.find(c => c.id == req.params.id);
    if (!course) return res.json({ error: "Course not found" });

    course.name = req.body.name;
    course.duration = req.body.duration;
    res.json(course);
});

// DELETE
app.delete("/api/courses/:id", (req, res) => {
    courses = courses.filter(c => c.id != req.params.id);
    res.json({ message: "Course deleted" });
});

app.listen(3000, () => console.log("Challenge 1 running on 3000"));
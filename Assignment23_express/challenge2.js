const express = require("express");
const { body, validationResult } = require("express-validator");

const app = express();
app.use(express.json());

// POST with validation
app.post(
    "/api/courses",
    body("name").notEmpty().withMessage("Course name is required"),
    body("duration").notEmpty().withMessage("Duration is required"),
    (req, res) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array()[0].msg });
        }

        res.json({ message: "Course created successfully" });
    }
);

app.listen(3001, () => console.log("Challenge 2 running on 3001"));
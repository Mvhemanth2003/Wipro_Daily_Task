let courses = [
    { id: 1, name: "JavaScript Basics" },
    { id: 2, name: "Python Full Course" }
];

exports.getCourses = (req, res) => {
    res.status(200).json(courses);
};

exports.createCourse = (req, res) => {
    const course = { id: courses.length + 1, ...req.body };
    courses.push(course);
    res.status(201).json(course);
};
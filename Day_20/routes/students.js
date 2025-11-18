// student.js will be uased for following CRUD operations for student entity ( In momeory storage  , using arrray of objects    )
// 1. Create a new student - POST /students
// 2. Get all students - GET /students
// 3. Get a student by ID - GET /students/:id
// 4. Update a student by ID - PUT /students/:id
// 5. Delete a student by ID - DELETE /students/:id
const express = require('express');
const router = express.Router();

let students = [];
let currentId = 1;

router.post('/', (req, res) => {
  const student = { id: currentId++, ...req.body };
  students.push(student);
  res.status(201).json(student);
});

router.get('/', (req, res) => {
  res.json(students);
});

router.get('/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ message: 'Student not found' });
  res.json(student);
});

router.put('/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ message: 'Student not found' });

  Object.assign(student, req.body);
  res.json(student);
});

router.delete('/:id', (req, res) => {
  const index = students.findIndex(s => s.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Student not found' });

  students.splice(index, 1);
  res.json({ message: 'Student deleted successfully' });
});

module.exports = router;
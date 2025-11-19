function validateCourseId(req, res, next) {
  const id = req.params.id;

  if (!/^[0-9]+$/.test(id)) {
    return res.json({ error: "Invalid course ID" });
  }
  next();
}

module.exports = validateCourseId;
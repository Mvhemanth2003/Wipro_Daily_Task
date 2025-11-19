const morgan = require('morgan');

// User Story 1: Request Logging
const requestLogger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
};

// User Story 2: Student Validation
const validateStudent = (req, res, next) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            error: "Name and email are required"
        });
    }
    next();
};


// User Story 4: Morgan Logger
const morganMiddleware = morgan('dev');

// User Story 5: Error Handling Middleware
const errorHandler = (err, req, res, next) => {
    console.error("Server Error:", err.message);

    res.status(500).json({
        message: "Something went wrong on the server."
    });
};

// Export everything
module.exports = {
    requestLogger,
    validateStudent,
    morganMiddleware,
    errorHandler
};
const mysql = require("mysql2");

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Mvhemanth@2003",
});

conn.connect((err) => {
    if (err) throw err;
    console.log("MySQL Connected!");

    // Step 1: Create database if not exists
    conn.query("CREATE DATABASE IF NOT EXISTS course_details", (err) => {
        if (err) throw err;
        console.log("Database ready!");

        // Switch to database
        conn.changeUser({ database: "course_details" }, (err) => {
            if (err) throw err;

            // Step 2: Create table if not exists
            const createTable = `
                CREATE TABLE IF NOT EXISTS courses (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(100),
                    duration VARCHAR(50)
                )
            `;

            conn.query(createTable, (err) => {
                if (err) throw err;
                console.log("Table ready!");

                // Step 3: Insert course
                const course = { name: "Node Basics", duration: "3 weeks" };
                const sql = "INSERT INTO courses SET ?";

                conn.query(sql, course, (err, result) => {
                    if (err) throw err;
                    console.log("INSERT INTO courses successful!");
                    process.exit(); 
                });
            });
        });
    });
});
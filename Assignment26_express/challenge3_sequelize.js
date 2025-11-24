console.log("Challenge 3 Started...");

const { Sequelize, DataTypes } = require("sequelize");
const mysql = require("mysql2/promise");

// 1 CREATE DATABASE IF NOT EXISTS
async function createDB() {
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Mvhemanth@2003"
    });

    await connection.query(`CREATE DATABASE IF NOT EXISTS course_details;`);
    console.log("Database ready!");
    await connection.end();
}

async function startSequelize() {
    // 2 CONNECT SEQUELIZE TO THE DATABASE
    const sequelize = new Sequelize("course_details", "root", "Mvhemanth@2003", {
        host: "localhost",
        dialect: "mysql",
        logging: false
    });

    // 3 DEFINING MODELS
    const Instructor = sequelize.define("Instructor", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    const Course = sequelize.define("Course", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    // 4 RELATIONSHIP
    Instructor.hasMany(Course);
    Course.belongsTo(Instructor);

    // 5 SYNC DATABASE
    await sequelize.sync({ force: true });
    console.log("Tables created!");

    // 6 INSERT SAMPLE DATA
    const instructor = await Instructor.create({ name: "Hemanth" });

    await Course.create({ title: "JavaScript", InstructorId: instructor.id });
    await Course.create({ title: "Node.js", InstructorId: instructor.id });
    await Course.create({ title: "Express.js", InstructorId: instructor.id });

    console.log("Sample data inserted!");

    // 7 FETCH ALL COURSES BY INSTRUCTOR
    const result = await Instructor.findOne({
        where: { id: instructor.id },
        include: Course
    });

    console.log("Instructor and their courses:");
    console.log(JSON.stringify(result, null, 2));

    process.exit();
}

// 8 RUN EVERYTHING
(async () => {
    await createDB();
    await startSequelize();
})();





















































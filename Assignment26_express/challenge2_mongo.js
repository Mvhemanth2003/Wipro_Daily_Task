console.log("Mongo Challenge 2 Started...");

const mongoose = require("mongoose");

// 1CONNECT TO MONGODB
mongoose.connect("mongodb://127.0.0.1:27017/SchoolDB")
    .then(() => console.log("MongoDB Connected!"))
    .catch(err => console.log("Mongo Error:", err));


// 2 USER MODEL
const User = mongoose.model("User", new mongoose.Schema({
    name: String,
    email: String
}));


// 3 ENROLLMENT MODEL
const Enrollment = mongoose.model("Enrollment", new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    courseName: String
}));


// 4 INSERT SAMPLE DATA
async function insertSample() {
    const user = await User.create({
        name: "Hemanth",
        email: "hemanth@test.com"
    });

    await Enrollment.create({
        userId: user._id,
        courseName: "Node.js"
    });
}


// 5 FETCH ENROLLMENT WITH USER DETAILS
async function fetchEnrollments() {
    const data = await Enrollment.find().populate("userId");
    console.log("Enrollment Details:", data);
}


// 6 MAIN FUNCTION
async function run() {
    console.log("Inserting sample data...");
    await insertSample();

    console.log("Fetching data...");
    await fetchEnrollments();

    process.exit();
}

run();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const app = express();

app.use(express.static(__dirname)); 
app.use(bodyParser.urlencoded({ extended: true }));

// SESSION SETUP
app.use(session({
    secret: "secret123",
    resave: false,
    saveUninitialized: false
}));

// PASSPORT MIDDLEWARE
app.use(passport.initialize());
app.use(passport.session());

// MONGO CONNECTION
mongoose.connect("mongodb://127.0.0.1:27017/skilltrack");

// USER SCHEMA
const userSchema = new mongoose.Schema({
    name: String,
    email: String,      
    password: String,
    role: String      
});

const User = mongoose.model("User", userSchema);

// PASSPORT STRATEGY
passport.use(new LocalStrategy(
    { usernameField: "email" },  // <-- login using email
    async (email, password, done) => {
        const user = await User.findOne({ email });
        if (!user) return done(null, false);

        if (user.password !== password) return done(null, false);

        return done(null, user);
    }
));

// SERIALIZE
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// DESERIALIZE
passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

// REGISTER ROUTE
app.post("/register", async (req, res) => {
    const { name, email, password, role } = req.body;

    const user = new User({ name, email, password, role });
    await user.save();

    res.send(`Registration successful for ${name}`);
});

// LOGIN ROUTE
app.post("/login", passport.authenticate("local"), (req, res) => {
    res.send("Login successful!");
});

// MIDDLEWARE FOR ADMIN CHECK
function isAdmin(req, res, next) {
    if (!req.isAuthenticated()) return res.send("Access Denied");
    if (req.user.role !== "admin") return res.send("Access Denied");
    next();
}

// ADMIN ROUTE
app.get("/admin", isAdmin, (req, res) => {
    res.send("Welcome, Admin!");
});

app.listen(3000, () => console.log("Server 3 running"));
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: true
}));

// Set up a static directory for serving HTML
app.use(express.static(path.join(__dirname, "public")));

// Dummy credentials for demonstration
const users = {
    username: "username",
    password: "password"
};

// Root route with login check
app.get("/", (req, res) => {
    if (req.session.loggedIn) {
        res.send(`<h1>Welcome, ${req.session.username}</h1><a href="/logout">Logout</a>`);
    } else {
        res.sendFile(path.join(__dirname, "public", "login.html"));
    }
});

// Login route
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (username === users.username && password === users.password) {
        req.session.loggedIn = true;
        req.session.username = username;
        res.redirect("/");
    } else {
        res.send("<h1>Invalid username or password</h1><a href='/'>Try again</a>");
    }
});

// Logout route
app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) throw err;
        res.redirect("/");
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

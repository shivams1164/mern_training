const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the public directory
app.use(express.static('public'));

// GET route to serve the login page
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

// POST route to handle form submission
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Here you would typically check the username and password against a database or some other authentication mechanism
    // For simplicity, I'll just check if the username and password are both "admin"
    if (username === 'shivam' && password === 'shivam') {
        res.send('<h1>Login Successful!</h1>');
    } else {
        res.send('<h1>Login Failed. Please try again.</h1>');
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

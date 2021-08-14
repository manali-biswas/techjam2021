const express = require('express');
const app = express();
const port = process.env.port || 8000;
const hostname = process.env.IP || 'localhost';

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.get('/match', (req, res) => {
    res.render('match');
});

app.listen(port, hostname, () => {
    console.log(`Listening at http://${hostname}:${port}`);
});
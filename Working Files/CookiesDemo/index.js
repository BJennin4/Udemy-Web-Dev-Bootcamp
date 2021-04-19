const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser('thisismysecret'));

app.get('/greet', (req, res) => {
    const {name = 'No-name'} = req.cookies;
    res.send(`Hey there, ${name}`);
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'Stevie Chicks');
    res.cookie('animal', 'Harlequin Shrimp');
    res.send('Okay, you have a cookies');
})

app.get('/getsignedcookie', (req,res) => {
    res.cookie('fruit', 'grape', {signed: true});
    res.send('Okay signed your cookie');
})

app.get('/verifyfruit', (req, res) => {
    res.send(req.signedCookies);
})

app.listen(3000, () => {
    console.log('Serving!');
})
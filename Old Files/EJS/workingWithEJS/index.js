const express = require('express');
const app = express();
// path required for setting "views"
const path = require('path');

app.set('view engine', 'ejs');
// The next line sets the path to the path of the folder that contains index.js and the views dir
app.set('views', path.join(__dirname, '/views'));

app.get('/',(req,res) => {
    // view engine defaults to the "views" folder, so the folder does not have to be specified
    res.render('home.ejs')
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    res.render('subreddit', {subreddit})
})

app.get('/rand', (req,res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    // The .ejs is not required if the 'view engine' is set to 'ejs'
    res.render('random', {num})
    // {num} makes the object {num: num}
})

app.get('/cats',(req,res) =>{
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
    ]
    res.render('cats', {cats})
})

app.get('*',(req,res) => {
    res.send('Something went wrong')
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
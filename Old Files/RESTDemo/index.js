const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');


// States how express should parse post data
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.json());
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

let comments = [
    {   id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {   id: uuid(),
        username: 'skyler',
        comment: 'i like to go birdwatching with my dog'
    },
    {   id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {   id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    },
]

app.get('/comments', (req,res) => {
    res.render('comments/index', { comments });
})

app.get('/comments/new', (req,res) => {
    res.render('comments/new');
})

app.get('/comments/:id', (req,res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment });
})

app.get('/comments/:id/edit', (req,res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment })
})

app.post('/comments', (req,res) => {
    const {username, comment} = req.body;
    comments.push({username, comment, id: uuid()});
    res.redirect('/comments');
})

app.patch('/comments/:id', (req,res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments');
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})

// Practicing GET/POST requests
app.get('/tacos', (req, res) => {
    res.send('GET /tacos response')
})
app.post('/tacos', (req,res) => {
    const {meat,qty} = req.body;
    res.send(`Okay, here are your ${qty} ${meat} tacos!`);
})

app.get('*', (req, res) => {
    res.send('Something has gone wrong, try again!');
})

app.listen(3000, () => {
    console.log('On port 3000');
})

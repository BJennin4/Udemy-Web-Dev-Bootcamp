const express = require('express');
const app = express();

//use() has access to incoming and outgoing requests: req, and res
// app.use((req, res) => {
//     console.log('We got a new request')
//     res.send("Request received, This is a response!")
// })
// Has to be commented out or will not run remaining requests

app.get('/r/:subreddit', (req,res) => {
    // The colon matches a pattern for the URL
    const {subreddit} = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})
app.get('/r/:subreddit/comments/:postId', (req,res) => {
    const {subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`)
})
app.get('/cats',(req, res) => {
    res.send('Meow!')
})
app.get('/dogs',(req, res) => {
    res.send('Woof!')
})
app.get('/',(req, res) => {
    res.send(`<h1>Welcome to the home page!</h1>`)
})
app.get('/search', (req, res) => {
    const {q} = req.query;
    if (!q) {
        res.send(`You didn't search anything!`)
    }
    res.send(`<h1>Search results for: ${q}</h1>`)
})
app.get('*', (req,res) => {
    res.send(`I don't know that path!`)
})

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
})
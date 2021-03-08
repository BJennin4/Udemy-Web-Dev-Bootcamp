const express = require('express');
const app = express();
const morgan = require('morgan');

// app.use(morgan('tiny'));
app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
})
app.use('/dogs', (req, res, next) => {
    console.log('I love dogs!');
    next();
})

const verifyPassword = (req, res, next) => {
    // Not actually how you set up a password, just a validation example
    const {password} = req.query;
    if(password === 'chickennugget'){
        next();
    }
    res.send('Sorry, you need a (correct) password!')
}
// app.use((req, res, next) => {
//     console.log('This is a middleware');
//     next();
// })

app.get('/', (req, res) => {
    console.log(`Request date: ${req.requestTime}`);
    res.send('Home Page!');
})

app.get('/dogs', (req, res) => {
    console.log(`Request date: ${req.requestTime}`);
    res.send('WOOF WOOF!');
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('My secret is: [REDACTED]')
})

app.use((req, res) => {
    res.status(404).send('Not found! Sorry bud.');
})

app.listen(3000, () => {
    console.log('App is up on 3000 boss');
})
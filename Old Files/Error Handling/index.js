const express = require('express');
const app = express();
const morgan = require('morgan');
const AppError = require('./AppError')

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
    // res.send('Sorry, you need a (correct) password!');
    // res.status(401);
    // throw new Error('Correct password required!');
    throw new AppError('Password Required', 401);
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

app.get('/error', (res, req) => {
    chicken.fly();
})

app.get('/admin', (req, res) => {
    throw new AppError('You are not an Admin!', 403)
})

app.use((req, res) => {
    res.status(404).send('Not found! Sorry bud.');
})

// // Takes place of default error handling
// app.use((err, req, res, next) => {
//     console.log('***********************************');
//     console.log('***************ERROR***************');
//     console.log('***********************************');
//     next(err);
// })

app.use((err, req, res, next) => {
    const {status = 500, message = 'Something went wrong'} = err;
    res.status(status).send(message);
})

app.listen(3000, () => {
    console.log('App is up on 3000 boss');
})
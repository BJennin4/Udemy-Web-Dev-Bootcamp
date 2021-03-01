const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movies', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Connection open!')
})
.catch(err =>{
    console.log('It broke')
    console.log(err)
})
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

// // First part of mongoose.model() is a string containing the name of the model, singular, capatalized
const Movie = mongoose.model('Movie', movieSchema);
// const amadeus = new Movie({title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' });
// amadeus.save()


// // .save() not required for insertMany
// Movie.insertMany([
//     { title: 'Amelie', year: 2001, score: 8.3, rating: 'R'},
//     { title: 'Alien', year: 1979, score: 8.1, rating: 'R'},
//     { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG'},
//     { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R'},
//     { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13'}
// ])
// .then(data => {
//     console.log('It Worked!');
//     console.log(data);
// })


// // Updating
// Movie.updateMany({title: {$in: ['Amadeus', 'Stand By Me']}}, {score: 10}).then(res => console.log(res))
// Movie.findOneAndUpdate({title: 'The Iron Giant'}, {score: 7.8}, {new: true}).then(m => console.log(m));
// Movie.remove({title: 'Amelie'}).then(msg => console.log(msg));
// Movie.deleteMany({year: {$gte: 1999}}).then(msg => console.log(msg));
Movie.findOneAndDelete({title: 'Alien'}).then(m => console.log(m))
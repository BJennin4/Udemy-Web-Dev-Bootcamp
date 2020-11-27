const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const movies = [
    {
        title: "Amadeus",
        score: 99
    },
    {
        title: "Stand By Me",
        score: 85
    },
    {
        title: "Parasite",
        score: 95
    },
    {
        title: "Alien",
        score: 90
    }
]

// forEach was more common before For Of loops

function print(element) {
    console.log(element);
}

numbers.forEach(print)

numbers.forEach(function(el) {
    console.log(el);
})

numbers.forEach(function(el){
    if (el % 2 === 0) {
        console.log(el);
    }
})



movies.forEach(function(movie){
    console.log(`${movie.title} - ${movie.score}/100`);
})

// Map functions apply a function to each item in an array, creating a new array

const doubles = numbers.map(function(num){
    return num * 2
})

const titles = movies.map(function(movie){
    return movie.title.toUpperCase();
})
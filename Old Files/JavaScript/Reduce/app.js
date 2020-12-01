const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;
// for(let price of prices) {
// total += price;
// }

// const total = pricese.reduce((total, price) => {
//     return total + price
// })

// Single line implicit return
const total = pricese.reduce((total, price) => total + price)


// Return lowest price
prices.reduce((min, price) => {
    if (price < min) {
        return price;
    } 
    return min;
})
// Return highest price
prices.reduce((max, price) => {
    if (price > min) {
        return price;
    } 
    return max;
})


const movies = [
    {
        title: "Amadeus",
        score: 99,
        year: 1984
    },
    {
        title: "Sharknado",
        score: 35,
        year: 2013
    },
    {
        title: "13 Going on 30",
        score: 70,
        year: 2013
    },
    {
        title: "Stand by Me",
        score: 85,
        year: 1986
    },
    {
        title: "Waterworld",
        score: 62,
        year: 1995
    },
    {
        title: "Jingle All The Way",
        score: 71,
        year: 1996
    },
    {
        title: "Parasite",
        score: 95,
        year: 2019
    },
    {
        title: "Notting Hill",
        score: 77,
        year: 1999
    },
    {
        title: "Alien",
        score: 90,
        year: 1979
    }
]
// Returns highest rated
highestRated = movies.reduce((bestMovie, currMovie) => {
    if(currMovie.score > bestMovie.score){
        return currMovie;
    }
    return bestMovie;
})


// Adds second argument for initial value (Adds up to 120 instead of 20)
const evens = [2,4,6,8];
evens.reduce((sum,num) => sum + num, 100)
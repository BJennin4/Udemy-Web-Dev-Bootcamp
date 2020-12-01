const nums = [9,8,7,6,5,4,3,2,1];
const odds = nums.filter(n => {
    return n%2===1
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

// const goodMovies = movies.filter(m => m.score > 80)
// const goodTitles = goodMovies.map(m => m.title)
// Top lines in a single line:
const goodTitles = movies.filter(m => m.score > 80).map(m => m.title)

const badMovies = movies.filter(m => m.score < 70)
const recentMovies = movies.filter(m => m.year > 2010)


const exams = [80,98,92,78,70,90,89,84,81,77]
exams.every(score => score >= 75) // False because one is below 75
exams.some(score => score >= 75) // True because some are above 75
movies.some(movie => movie.year > 2015) // True because at least one movie is after 2015
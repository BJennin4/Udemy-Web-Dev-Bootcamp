// Arrow Functions can be used to replace function expresssions such as:
// const add = function(x,y){
//     return x + y;
// }
// With:
const add = (x,y) => {
    return x + y;
}

// Parentheses are optional if there is only one parameter
const square = num => {
    num*num;
}

const rollDie = () => {
    return Math.floor(Math.random()*6)+1
}

// Implicit returns (Only work with arrow functions)
// If the arrow function is just returning a value, you can take out the return and replace the {} with ()
const rollDie2 = () => (
    Math.floor(Math.random()*6)+1
)
// Can be done on one line without () for a one line implicit return
const sub = (a,b) => a - b

// ONLY WORKS IF THERE IS ONLY A SINGLE VALUE IN YOUR FUNCTION TO BE RETURNED

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

// const newMovies = movies.map(function(movies){
//     return `${movie.title} - ${movie.score / 10}`
// })

const newMovies = movies.map((movie) => (
    `${movie.title} - ${movie.score / 10}`
))




// Arrow functions and "This"
const person = {
    firstName: "Viggo",
    lastName: "Mortensen",
    fullName: function(){
        // Returns Viggo Mortensen
       return `${this.firstName} ${this.lastName}`
    },
    // shoutName: function() {
    //     setTimeout(function(){
    //         console.log(this.fullName())
    //         // This will create a window because setTimeout is a method on the window
    //     }, 3000)
    // }
}
const person2 = {
    firstName: "Viggo",
    lastName: "Mortensen",
    fullName: () => {
        // Returns undefined undefined
       return `${this.firstName} ${this.lastName}`
        // Despite being the same function the scope is where the function was created
    },
    // Returns undefined undefined because person2.fullName is undefined undefined
    shoutName: function() {
        setTimeout(() => {
            console.log(this.fullName())
        }, 3000)
    }
}
const person3 = {
    firstName: "Viggo",
    lastName: "Mortensen",
    fullName: function(){
       return `${this.firstName} ${this.lastName}`
    },
    // Only works in this context because fullname was defined then the shoutName function refrences where it was defined instead of where it currently is called from
    shoutName: function() {
        setTimeout(() => {
            console.log(this.fullName())
        }, 3000)
    }
}
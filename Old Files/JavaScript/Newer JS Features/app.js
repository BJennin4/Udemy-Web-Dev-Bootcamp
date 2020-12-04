// Default Params

function rollDie2(numSides){
    // Old method of setting a default param
    if (numSides === undefined){
        numSides = 6
    }
    return Math.floor(Math.random() * numSides) + 1
}

// New, more compact alternative for setting a default param
function rollDie(numSides = 6){
    return Math.floor(Math.random()*numSides)+1
}
// Default params should come AFTER params without defaults
// This prevents parameters without defaults being undefined
function greet(person, msg="Hey there", punc = "!"){
    console.log(`${msg}, ${person}${punc}`)
}

// Spread

const nums = [13,4,5,21,3,3,1,2,7,6,4,2,27]
Math.max(nums) // Returns NaN because this is a single array
Math.max(...nums) // Spread syntax, spreads the array into seperate arguments

const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];
const allPets = [...cats, ...dogs]; // Combines cats and dogs with spread

const feline = {legs: 4, family: "Felidae"};
const canine = {isFurry: true, family: "Caninae"};
const catDog = {...feline,...canine}; // There is a conflict with the family, so canine wins because it is written second
const steeleCatDog = {...feline,...canine,family:"Steele"}; //Overrides family with Steele


// Arguments - Act like an arry but is NOT an array, contains all arguments passed into a function
function sum(){
    console.log(arguments);
    console.log("Try using sums()");
}

// Rest
// Goes in the parameter list, collecting all remaining arguments to put them into an array

function sums(...nums){
    console.log(nums);
    return nums.reduce((total,el) => total + el);
}

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`);
    console.log(`GOLD MEDAL GOES TO: ${silver}`);
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`);
}

// Destructuring

const scores = [929321,899341,888336,772739,543671,243567,111934];
const highScore = scores[0];
const secondHighScore = scores[1];
// Creates variables based on the order of the array
// Brackets are required to destructure from an array
const [gold, silver, bronze] = scores;
console.log(gold);
console.log(silver);
console.log(bronze);

const user = {
    email: "harvey@gmail.com",
    password: "sCoTt1948sMiTh",
    firstName: "Harvey",
    lastName: "Milk",
    born: 1930,
    died: 1978,
    bio: "Harvey Bernard Milk was an American politician and the first openly...",
    city: "San Francisco",
    state: "California"
}

const user2 = {
    email: "Stacy@gmail.com",
    firstName: "Stacy",
    lastName: "Gonzalez",
    born: 1987,
    city: "Tulsa",
    state: "Oklahoma"
}

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

const {email, firstName, lastName, city, bio} = user; 
// Creates all these seperate variables from the object user

const {born:birthYear, died:deathYear} = user;
// Creates variables of born and died and renames them
const {city:cityLived,state,died = "N/A"}= user2;
// Gives a default value for died, only applies if there is no value in the object

function fullName(user){
// Destructuring in the function
    const {firstname, lastname} = user;
    return `${firstName} ${lastName}`
}

// Destructuring going into the object
function fullName2({firstName,lastName}){
    return `${firstName} ${lastName}`
}


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


movies.filter((movie) => movie.score >= 90)
// Filters movies for scores above 90
movies.filter(({score}) => score >= 90)
// Shorter syntax for only pulling score

movies.map(movie => {
    return `${movie.title} (${movie.year}) is rated ${movie.score}`
}) // Returns Title, Year, and Score
movies.map(({title,score,year}) => {
    return `${title} (${year}) is rated ${score}`
}) // Title, Year, Score destructured
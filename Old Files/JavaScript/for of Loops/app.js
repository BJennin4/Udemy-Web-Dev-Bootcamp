const seatingChart = [
    ['Kristen','Erik','Namita'],
    ['Geoffrey','Juanita','Antonio','Kevin'],
    ['Yuma','Sakura','Jack','Erika']
]

for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}

for (let char of "hello world") {
    console.log(char);
}


// Object literals are not iteratable with a for of loop
// Bonus for in loop
// Iterates the key
const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

for (let person in testScores) {
    console.log(person);
    console.log(`${person} scored ${testScores[person]}`);
}

// Extra bonus turning object literals into arrays with Object
let total = 0;
let scores = Object.values(testScores);
for(let score of Object.values(testScores)) {
    console.log(score);
    total += score;
}
console.log(total / scores.length);
let count = 0;
while(count<10){
    count++;
    console.log(count);
}

// const SECRET = "babyHippo";

// let guess = prompt("Enter the secret code...");
// while (guess !== SECRET) {
//     guess = prompt("Wrong. Enter the secret code...");
// }
// console.log("Congrats! You got the secret!");
// let input = prompt("Hey, say something!")
// while (true){
//     input = prompt(input);
//     if(input.toLowerCase() === "stop copying me"){
//         break;
//     }
// }
// console.log("Okay fine");
// for (let i = 0; i<=1000; i++){
//     console.log(i);
//     if(i==100){
//         break;
//     }
// }

let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Please enter a valid number!"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;
let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
    } else {
        guess = prompt("Too low! Enter a new guess");
    }
}
if (guess === 'q') {
    console.log("I win, you lose.");
} else {
console.log(`You got it! It took you ${attempts} guesses`);
}
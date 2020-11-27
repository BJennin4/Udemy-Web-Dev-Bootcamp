function singSong() {
console.log("Do");
console.log("Re");
console.log("Mi");
}

function greet(firstName, lastName){
    console.log(`Hey there, ${firstName}! ${lastName[0]}.`);
}
// Ignoring the reapeat method
function repeat(str,numTimes){
    let result = "";
    for(let i = 0; i < numTimes; i++){
        result += str;
    }
    console.log(result);
}

// Higher order functions
function callTwice(func){
    func();
    func();
}

function callTenTimes(f){
    for(let i=0; i<10; i++){
        f();
    }
}
function rollDie(){
const roll = Math.floor(Math.random()*6)+1
    console.log(roll)
}

function makeMysteryFunc(){
const rand = Math.random();
if(rand > 0.5){
    return function() {
        console.log("Congrats, I am a good function!");
        console.log("You win all the money!!");
    }
} else {
        return function () {
            alert("YOU HAVE BEEN INFECTED BY THE COMPUTER VIRUS");
            alert("Stop trying to close this window!");
            alert("Stop trying to close this window!");
            alert("Stop trying to close this window!");
            alert("Stop trying to close this window!");
            alert("Stop trying to close this window!");
            
        }
    }

}

function makeBetweenFunc(min,max){
return function(num){
    return num >= min && num <= max;
}
}

// Functions as methods

// const myMath = {
//     PI: 3.14159,
//     suare: function(num) {
//         return num*num
//     },
//     square:function(num){
//         return num**2
//     },
//     cube:function(num){
//         return num**3;
//     }
// }
const myMath = {
    PI: 3.14159,
    suare(num) {
        return num*num
    },
    square(num){
        return num**2
    },
    cube(num){
        return num**3;
    }
}

const cat = {
    name: "Blue Steele",
    color: "grey",
    breed: "Scottish Fold",
    meow(){
        console.log(`${this.name} says MEOWWWW`);
    }
}

// Try/Catch

try {
    hello.toUpperCase();
} catch {
    console.log("Things didn't work");
}

console.log("Proof the code didn't break");

function yell(msg){
    try {
    console.log(msg.toUpperCase().repeat(3));
    } catch(e){
        console.log(e);
        console.log("Please pass a string next time!");
    }
}
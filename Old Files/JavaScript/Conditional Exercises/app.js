console.log("Before Conditional");
let random = Math.random();
if (random<0.5) {
    console.log("Random number is less than 0.5!");
    console.log(random);
} else if (random >= 0.5) {
    console.log("Random number is greater than 0.5!");
    console.log(random);
} else {
    console.log("Math has broken.");
}
console.log("After Conditional");

const dayOfWeek = prompt("Enter a weekday").toLowerCase();
if(dayOfWeek) {
    if(dayOfWeek === "monday"){
        console.log("Boo Monday");
    } else if(dayOfWeek === "tuesday"){
        console.log("Boo Tuesday");
    } else if(dayOfWeek === "wednesday"){
        console.log("Okay Wednesday");
    } else if(dayOfWeek === "thursday"){
        console.log("Okay Thursday");
    } else if(dayOfWeek === "friday"){
        console.log("Woo! Friday!");
    } else if(dayOfWeek === "saturday") {
        console.log("Woo! Saturday!");
    } else {
        console.log("It's Sunday isn't it? That or you didn't follow the prompt.")
    }
} else if(!dayOfWeek) { 
    alert("You failed");
}

const age = Math.random()*100;
if (age <5) {
    console.log("You are a small child. You get in for free!");
} else if (age <10) {
    console.log("You are a child. You pay $10");
} else if (age <65) {
    console.log("You are an adult. You pay $20");
} else{
    console.log("You are a senior. You pay $10");
}

//I know the pricing isn't the same, I was following an instructor
if(age >= 0 && age < 5 || age >= 65) {
    console.log("FREE");
} else if(age >= 5 && age < 10) {
 console.log("$10");
} else if(age >= 10 && age < 65) {
    console.log("$20");
} else {
    console.log("Invalid Age");
}


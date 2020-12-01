console.log("Hello!")
// 3 seconds pass before this function is executed
setTimeout(() => {
    console.log("...are you still there?")
}, 3000)
// This will be printed immediately, before the timeout has resolved
console.log("I got excited")

// setInterval calls the function continuously on an interval
// clearInterval(id) stops this interval from running
const id = setInterval(() => {
console.log(Math.random())
} ,2000);
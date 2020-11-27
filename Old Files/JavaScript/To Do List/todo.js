// My attempt

// let input = "";
// let todo = [];
// let item = "";
// while (input.toLowerCase() !== "quit" && input.toLowerCase() !== "q") {
//     input = prompt("What would you like to do?");
//     if (input === "new") {
//         let item = prompt("Enter a new ToDo");
//         todo.push(item);
//         console.log(`${item} added to the list!`);
//     } else if (input === "list") {
//         console.log("**********");
//         for (let step of todo){
//             console.log(`${todo.indexOf(step)}: ${step}`);
//         }
//         console.log("**********");
//     } else if (input === "delete") {
//         input = prompt("Enter index of item to delete");
//         console.log(`${todo[input]} Removed`);
//         todo.splice(input,1);
//     }
// }
// console.log("You have escaped the matrix");

// Solution
let input = prompt("What would you like to do?");
const todos = ["Collect Chicken Eggs", "Clean Litter Box"];
while(input !== "quit" && input !== "q") {
    if(input === "list") {
        console.log("**********")
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("**********")
    } else if (input === 'new') {
        const newTodo = prompt("Ok, what is the new todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    } else if (input === "delete") {
        const index = parseInt(prompt("Ok, enter an index to delete:"));
        if(!Number.isNaN(index)){
            const deleted = todos.splice(index,1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log("Unknown index");
        }
    }
    input = prompt("What would you like to do?");
}
console.log("OK QUIT THE APP!");
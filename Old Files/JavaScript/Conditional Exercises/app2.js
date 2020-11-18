const password = prompt("Please enter a fake password");
//Password must be 6+ characters
//Password cannot include space
if (password.length >= 6 && password.indexOf(" ") === -1) {
    console.log("Valid Password!");
} else {
    console.log("Incorrect Password Format!");
}

if(password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log ("Looks good!")
    } else {
        console.log("Password cannot contain spaces!");
    }
} else {
    console.log("Password is too short, must be 6+ characters!")
}


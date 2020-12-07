const btn = document.querySelector("#v2");

btn.onclick = function() {
    console.log("You clicked me!");
    console.log("I hope it worked!");
}

function scream(){
    console.log("AHHHHHHH!");
    console.log("STOP TOUCHING ME!!!");
}

btn.onmouseenter = scream;


// addEventListener gives the ability to run multiple functions on one event
// Is preferred method so it should be used
const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function(){
    alert("CLICKED");
})

const clr = document.querySelector('#clr');
const clrhd = document.querySelector('h2');
const randomColor = () =>{
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    if (r+g+b < 200) {
        document.querySelector('h1').style.color = 'white';
        clrhd.style.color = 'white';
    } else {
        document.querySelector('h1').style.color = 'black';
        clrhd.style.color = 'black';
    }
    return `rgb(${r},${g},${b})`;
};
clr.addEventListener('click', function(){
    const bkgColor = randomColor();
    // document.body can be used as a shortcut to select the body
    document.body.style.backgroundColor = bkgColor;
    clrhd.innerText = bkgColor;
})
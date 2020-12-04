const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}


const allImages = document.getElementsByTagName('img');
for(let img of allImages){
    console.log(img.src);
    // img.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Male_Silkie.png/460px-Male_Silkie.png'
}

const squareImages = document.getElementsByClassName('square');
for (let img of squareImages) {
    console.log(`*-*-*-*-*-*-*-*${img.src}`)
    // img.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Male_Silkie.png/460px-Male_Silkie.png'
}

// Can be used to select elements the way that that are selected in CSS
// ONLY returns the first match
console.log(
    document.querySelector('p'),
    document.querySelector('p:nth-of-type(2)'),
    document.querySelector('a[title="Java"]')
);

// querySelectorALL is used to return ALL elements that match
console.log(
    document.querySelectorAll('a'),
    document.querySelectorAll('p a')
);

const links = document.querySelectorAll('p a');
for(let link of links){
    console.log(link.href);
}

// allLinks already defined at the top
for(let link of allLinks){
    link.innerText = 'I AM A LINK!!!!!';
    link.style.color = 'rgb(200, 108, 134)';
    // link.style.textDecorationColor = 'magenta';
    // link.style.textDecorationStyle = 'wavy';
}

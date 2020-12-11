const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
// const lis = document.querySelectorAll('li');
// for(let li of lis) {
//     li.addEventListener('click',()=>{
//         li.remove();
//     })
// }

tweetsContainer.addEventListener('click', (e) =>{
e.target.nodeName === 'LI' && e.target.remove();
})
tweetForm.addEventListener('submit', function(e){
    e.preventDefault();
    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    // Selecting the elements can be done by name:
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;

    addTweet(usernameInput.value,tweetInput.value);
    usernameInput.value = '';
    tweetInput.value = '';

 
})

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(` - ${tweet}`)
    tweetsContainer.append(newTweet);
}

const input = document.querySelector('#input');
const title = document.querySelectorAll('h2')[1];

input.addEventListener('change', function(e){
    console.log('"Change" only happens when you blur the element after updating it.');
})
input.addEventListener('input', function(e){
    console.log('Input event');
    title.innerText = input.value;
})

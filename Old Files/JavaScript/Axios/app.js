axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
.then(res => {
    console.log(res.data.ticker.price)
})
.catch(err => {
    console.log("Error!", err)
})

const fetchBitcoinPrice = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        console.log(res.data.ticker.price)
    } catch(e){
        console.log('Something went wrong...', e)
    }
}

const jokes = document.querySelector('#jokes');
const button = document.querySelector('#dadJoke');
const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    console.log(jokeText);
    const newLi = document.createElement('LI');
    newLi.append(jokeText);
    jokes.append(newLi);
}
const getDadJoke = async () => {
    try {
        const config = { headers: {Accept: 'application/json'} }
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        console.log(res.data.joke);
        return res.data.joke;
    } catch (e) {
    return "Not feeling funny today :("
    }

}

button.addEventListener('click',addNewJoke);

const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function(e){
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = {params: {q: searchTerm}};
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=`, config)
    makeImages(res.data);
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for(let result of shows){
        if(result.show.image){
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}
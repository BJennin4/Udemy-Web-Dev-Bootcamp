const multiply = (x,y) => x * y;
const square = x => multiply(x, x);
const isRightTriangle = (a, b, c) => (
    square(a) + square(b) === square(c)
)

console.log('before');

isRightTriangle(3,4,5);

console.log('after');

// Nested Delays
// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                     setTimeout(() => {
//                         document.body.style.backgroundColor = 'purple';
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)

// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//         // This means if there is a doNext, then execute it
//     }, delay)
// }

// Nested Callback Functions === Callback Hell
// delayedColorChange('red', 1000, () => {
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('yellow', 1000, () => {
//             delayedColorChange('green', 1000, () => {
//                 delayedColorChange('blue', 1000, () => {
//                     delayedColorChange('purple', 1000)
//                 })
//             })
//         })
//     })
// })


// Promise objects
// .then and .catch for resolution or failure

const fakeRequestPromise = (url) => {
    return new Promise((resolve,reject) => {
        const delay = Math.floor(Math.random()*(4500)) + 500;
        setTimeout(() => {
            if(delay > 4000) {
                reject('Fake Connection Timed Out');
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// Example of syntax
// fakePromiseRequest('fakewebsite.com/api/fake/page1')
// .then(() => {
//     console.log('It worked! (pg1)');
//     fakePromiseRequest('fakewebsite.com/api/fake/page2')
//     .then(() => {
//         console.log('It worked! (pg2)');
//         fakePromiseRequest('fakewebsite.com/api/fake/page3')
//         .then(() => {
//             console.log('It worked! (pg3)');
//         })
//         .catch(() => {
//             console.log('Oh no, Error! (pg3)')
//         })
//     })
//     .catch(() => {
//         console.log('Oh no, Error! (pg2)')
//     })
// })
// .catch(() => {
//     console.log('Oh no, Error! (pg1)')
// })

// Promises can take the returned value for the next .then()
// There also only needs to be one .catch()
fakeRequestPromise('fakewebsite.com/api/fake/page1')
.then((data) => {
    console.log('It worked! (pg1)');
    console.log(data);
    return fakeRequestPromise('yelp.com/api/fake/page2')
})
.then((data) => {
    console.log('It worked! (pg2)');
    console.log(data);
    return fakeRequestPromise('yelp.com/api/fake/page3')
})
.then((data) => {
    console.log('It worked! (pg3)');
    console.log(data);
})
.catch((err) => {
    console.log('Oh no, a request failed!');
    console.log(err);
})

// Creating a Promise
// resolve and reject are parameters that represent the results of the promise
// both can be executed as functions inside the promise
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if(rand < 0.7){
                resolve('Your fake data here');
            }
            reject('Request error');
        }, 1000)
    })
}

fakeRequest('/dogs/1')
.then((data) => {
    console.log("Done with request");
    console.log('Data is:', data);
})
.catch((err) => {
    console.log('Oh no!', err);
})

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange('red', 1000)
.then(() => delayedColorChange('orange', 1000))
.then(() => delayedColorChange('yellow', 1000))
.then(() => delayedColorChange('green', 1000))
.then(() => delayedColorChange('blue', 1000))
.then(() => delayedColorChange('purple', 1000))
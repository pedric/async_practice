
const p1 = new Promise((resolve, reject) => {
    setTimeout( () => {
        console.log('Async operation one..')
        resolve(1)
    },2500);
});
const p2 = new Promise((resolve) => {
    setTimeout( () => {
        console.log('Async operation two..')
        resolve(2);
    },1500);
});

p1.then(result => {console.log('p1 done: ', result)})
p2.then(result => {console.log('p2 done: ', result)})

Promise.all([p1,p2])
    .then(result => { console.log(result); })
    .catch(err => { console.log(err.message) })
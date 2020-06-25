const p = new Promise((resolve,reject) => {
    // async work
    setTimeout(() => {
        resolve({id:3,name:'pedric'});
        // reject(new Error('error in promise'))
    },1000)
})

p
    .then(result => {
        console.log('Result: ', result);
    })
    .catch(err=> {
        console.log('Errorz: ', err.message);
    })
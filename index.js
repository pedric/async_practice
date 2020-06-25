

console.log('Before');
// Promise approach
// getUser(1)
//     .then(user => getRepositories(user))
//     .then(repos => getCommits(repos[0]))
//     .then(commit => console.log(commit))
//     .catch(err => console.log(err.message));

// Async and await approach
async function displayCommits(){
    try {
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repos[0]);
    console.log(commits);
    }
    catch(err) {
        console.log('ERROR: ', err.message);
    }
}
displayCommits();
console.log('After');

function getUser(id){
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            console.log('get user from db..');
            resolve({ id: id, gitHubUsername: 'pedric' });
        },1000);
    });
}

function getRepositories(username){
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            console.log('repos loaded')
            resolve(['repo1','repo2','repo3']);
            // reject(new Error('fail in getRepositories'))
        },1000);
    });
}

function getCommits(repo){
    return new Promise((resolve,reject) => {
        console.log('getCommits called');
        // callback(['commit1', 'commit2']);
        resolve(repo);
    });
}
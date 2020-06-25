

console.log('Before');
getUser(1, getRepositories);

console.log('After');

function getUser(id, callback){
    setTimeout( () => {
        console.log('get user from db..');
        callback({ id: id, gitHubUsername: 'pedric' });
    },1000);
}

function getRepositories(username,callback){
    setTimeout( () => {
        console.log('repos loaded')
        getCommits(['repo1','repo2','repo3']);
    },1000);
}

function getCommits(repos){
    console.log('getCommits called');
    // callback(['commit1', 'commit2']);
    displayCommits();
}

function displayCommits(){
    console.log('displaying commits');
}
const posts = [
    { title: 'Post One', body: 'the body of post one'},
    { title: 'Post Two', body: 'the body of post two'},
    { title: 'Post Three', body: 'the body of post three'},
];

function getPost() {
    setTimeout(() => {
        var output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}


// getPost();

let postObj = { title: 'Post Four', body: 'the body of post four'};

createPost(postObj, getPost);


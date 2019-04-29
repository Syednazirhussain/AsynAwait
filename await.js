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

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            posts.push(post);

            const error = false;
            if (!error) {
                resolve();    
            } else {
                reject('Error: Something goes wrong');
            }
        }, 2000);
    });

}

let postObj = { title: 'Post Four', body: 'the body of post four'};

// async function initialize() {
//     await createPost(postObj);
//     getPost();
// }

// initialize();



// Async await / fetch
async function getUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    console.log(data);
}

getUser();








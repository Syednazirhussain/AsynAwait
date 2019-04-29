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

// createPost(postObj)
//     .then(getPost)
//     .catch(err => {
//         console.log(err)
//     });

// Promise all

const promise1 = Promise.resolve('Sara Areeka, Aliza Maha');
const promise2 = 49;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Bye Bye'));
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());


Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));



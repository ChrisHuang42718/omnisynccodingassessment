export async function fetchPosts() { //Grab Posts from Web
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json(); //return json
}

//    "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"

export async function fetchPost(id) { //Grab Post Given ID
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json();
}

export async function fetchUser(id) { //Grab User Given ID
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return res.json();
}

export async function fetchComments(postId) { //Grab Comments from PostID
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    return res.json();
}

export async function fetchUserPosts(userId) { //Grab All Pots from UserID
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    return res.json();
}

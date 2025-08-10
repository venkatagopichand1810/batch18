// XMogHttpRequest
// reusable function to handle the XHR 

function makeRequest(method, url, data = null){
    // return the promise
    return new Promise((resolve, reject) => {
        // create the new XHR object
        const xhr = new XMLHttpRequest();

        // initialize the request
        xhr.open(method, url);

        // set the request headers for JSON
        if(data){
            xhr.setRequestHeader("Content-Type", 'application/json')
        }

        // onload handler
        
        xhr.onload = () => {
            if(xhr.status >=200){
                resolve(JSON.parse(xhr.response)); //we have to convert to json object
            } else {
                reject("request is failed")
            }
        }

        // network
        xhr.onerror = () => reject("network error")

        //send the request (convert the data to json string)

        xhr.send(data ? JSON.stringify(data) : null)

    })
}


// get posts
function getPosts() {
    makeRequest("GET", "https://jsonplaceholder.typicode.com/posts")
    .then(response => console.log("GET response", response))
    .catch(error => console.log(error.message))
}

getPosts();

// post request

function createPost() {
    const newPost = {
        title: "new post from venkat",
        body: "my day my wish"
    }

    makeRequest("POST", "https://jsonplaceholder.typicode.com/posts", newPost)
    .then(response => console.log("Post response", response))
    .catch(error => console.log(error.message))
}

createPost();


function patchPost() {
    const patchData = {
        title: "updated by me"
    }

    makeRequest("PATCH", "https://jsonplaceholder.typicode.com/posts/1", patchData)
    .then(response => console.log("Patch response", response))
    .catch(error => console.log(error.message))
}

patchPost();


function deletePost() {
    makeRequest("DELETE", "https://jsonplaceholder.typicode.com/posts/1")
    .then(response => console.log("Delete response", response))
    .catch(error => console.log(error.message))
}

deletePost();


function updatePost() {
    const updatedPost = {
        id: 1, 
        title: "updated by me today",
        body: "yes yes",
        userId: 1
    }

    makeRequest("PUT", "https://jsonplaceholder.typicode.com/posts/1", updatedPost)
    .then(response => console.log("put response", response))
    .catch(error => console.log(error.message))
}

updatePost()

patchPost();

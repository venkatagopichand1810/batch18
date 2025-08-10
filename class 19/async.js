
async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        console.log(response)
        if(!response.ok) {
            throw new Error("Get request is failed")
        }
        const data = await response.json();
        console.log(data)
    } catch (error){
        console.log("Get errror", error)
    }
}

getPosts()


// post the data

async function createPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                'Content-Type' : "application/json"
            },
            body: JSON.stringify({
                title: "New post by venkat",
                body: "this is posted by venkat"
            })
        });

        if(!response.ok) {
            throw new Error("post request is failed")
        }
        const data = await response.json();
        console.log("post response", data)

    } catch(error){
        console.log(error.message)
    }
}

createPost();


// put the data

async function updatePost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PUT",
            headers: {
                'Content-Type' : "application/json"
            },
            body: JSON.stringify({
                id: 1, 
                title: "updated by me today",
                body: "yes yes",
                userId: 1
            })
        });

        if(!response.ok) {
            throw new Error("put request is failed")
        }
        const data = await response.json();
        console.log("put response", data)

    } catch(error){
        console.log(error.message)
    }
}

updatePost();


async function patchPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PUT",
            headers: {
                'Content-Type' : "application/json"
            },
            body: JSON.stringify({
                title: "patch the post",

            })
        });

        if(!response.ok) {
            throw new Error("patch request is failed")
        }
        const data = await response.json();
        console.log("patch response", data)

    } catch(error){
        console.log(error.message)
    }
}

patchPost()


// delete the post

async function deletePost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "DELETE",
        });

        if(!response.ok) {
            throw new Error("DELETE request is failed")
        }
        console.log("DELETE response",)

    } catch(error){
        console.log(error.message)
    }
}

deletePost()

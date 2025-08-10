//get request
//.then....handles the response
//.catch....handle the errors

//get call
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => {
    if(!response.ok){
        throw new Error("get is failed")
    }
    return response.json(); //convert the response to the JSON
})
.then(data => console.log("Get response", data)) //.then will handle the response
.catch(err => console.log("failed", err)); //handles the error


//post call

fetch("https://jsonplaceholder.typicode.com/posts",  {

    method: "POST",
    headers: {
        "Content-Type" : "application/json"
    },
    body: JSON.stringify({
        title: "venkat",
        body: "venkat 1"
    })
})
.then(response => {
    if(!response.ok){
        throw new Error("post is failed")
    }
    return response.json(); //convert the response to the JSON
})
.then(data => console.log("Post response", data)) //.then will handle the response
.catch(err => console.log("failed", err)); //handles the error



//put call

fetch("https://jsonplaceholder.typicode.com/posts/1",  {

    method: "PUT",
    headers: {
        "Content-Type" : "application/json"
    },
    body: JSON.stringify({
        title: "venkat",
        body: "venkat 1"
    })
})
.then(response => {
    if(!response.ok){
        throw new Error("put is failed")
    }
    return response.json(); //convert the response to the JSON
})
.then(data => console.log("put response", data)) //.then will handle the response
.catch(err => console.log("failed", err)); //handles the error


//patch call

fetch("https://jsonplaceholder.typicode.com/posts/1",  {

    method: "PATCH",
    headers: {
        "Content-Type" : "application/json"
    },
    body: JSON.stringify({
        title: "venkata gopichand",
    })
})
.then(response => {
    if(!response.ok){
        throw new Error("patch is failed")
    }
    return response.json(); //convert the response to the JSON
})
.then(data => console.log("patch response", data)) //.then will handle the response
.catch(err => console.log("failed", err)); //handles the error



//delete call

fetch("https://jsonplaceholder.typicode.com/posts/1",  {

    method: "DELETE",
   
})
.then(response => {
    if(!response.ok){
        throw new Error("Delete is failed")
    }
    console.log("Deleted successfully")
})
.catch(err => console.log("Deleted error", err)); //handles the error



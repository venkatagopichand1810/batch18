// async/await is the modern way to handle asynchronous operations in javascript.


async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
        const data = await response.json();
        console.log(data)
    }catch(error){
        console.log("error", error)
    }
}

fetchData();




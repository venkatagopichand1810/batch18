const API_URL = "https://jsonplaceholder.typicode.com/posts";

//function to get the data
function getData() {
    fetch(API_URL)
    .then(response => {
        // check if response is ok
        if(!response.ok){
            throw new Error(`HTTP erro status : ${response.status}`)
        }
        return response.json()
    })
    .then(data => {
        displayData(data)
    })

    .catch(error => {
        console.log("Error fetching the data", error)
    })
}

// create the function to display the data in the UI
function displayData(data){
    const dataContainer = document.getElementById("dataContainer");
    dataContainer.innerHTML = "";

    // get the data
    data.slice(0, 5).forEach(item => {
        const card = document.createElement("div");
        card.classList.add("col-md-3");
        card.innerHTML = `
        <div class = "card">
            <h4>${item.title}</h4>
            <p>${item.body}</h4>
        </div>
        
        `

        dataContainer.appendChild(card)
    })
}


getData();
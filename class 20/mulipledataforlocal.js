//function to save the data 

function saveLogin() {
    const name = document.getElementById("nameInput").value;

    if(name){
        let namesArray = [];
        try {
            const storedData = localStorage.getItem("username");
            namesArray = storedData ? JSON.parse(storedData) : []
        } catch (err){
            console.log("invalid json")
            namesArray = []
        }
        namesArray.push(name)
        // save the updated array back to localstorage
        localStorage.setItem("username",JSON.stringify(namesArray))
        displayName();
        document.getElementById("nameInput").value = "";
    } else {
        alert("Please enter your name")
    }
}


// function to remove the name from the local storage

function logout() {
    localStorage.removeItem('username');
    displayName();

}

// function to display stored name in the ui
function displayName() {
    const storedName = JSON.parse(localStorage.getItem("username"));
    const output = document.getElementById("output");

    if(storedName){
        output.innerHTML = `<mark>Welcome back,${storedName}</mark>`
    } else {
        output.innerText = "Please login"
    }
}
//function to save the data 

function saveLogin() {
    const name = document.getElementById("nameInput").value;
    console.log(name);

    if(name){
        localStorage.setItem("username", name);
        displayName();
        document.getElementById("nameInput").value = "";
    } else {
        alert("Please enter your name")
    }
}


// function to remove the name from the local storage

function logout() {
    localStorage.removeItem('username');
    displayName()

}

// function to display stored name in the ui
function displayName() {
    const storedName = localStorage.getItem("username");
    const output = document.getElementById("output");

    if(storedName){
        output.innerHTML = `<mark>Welcome back,${storedName}</mark>`
    } else {
        output.innerText = "Please login"
    }
}
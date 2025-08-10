const toggleBtn = document.getElementById("toggleBtn");

// check the localstorage on page load

window.onload = () => {
    const darkMode = localStorage.getItem("darkMode")
    if(darkMode === "enabled"){
        document.body.classList.add("dark-mode")
    }
}

// toggle the dark mode and save the value

toggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark-mode");

    if(isDark){
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled");
    } else {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled");
    }
})
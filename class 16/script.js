const box = document.getElementById("box");
const coords = document.getElementById('coords');


// click
box.addEventListener("click", () => {
    box.style.backgroundColor = "black"
})


box.addEventListener("dblclick", () => {
    box.style.backgroundColor = "darkblue"
})


box.addEventListener("mousedown", () => {
    box.style.backgroundColor = "darkpink"
})
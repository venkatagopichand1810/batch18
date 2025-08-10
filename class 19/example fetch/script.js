// reference to the button and gallery div

const loadBtn = document.getElementById('loadBtn');
const gallery = document.getElementById('gallery');


//function to fetch the imgaes from the api

function getImages() {

    //clear the previous images
    gallery.innerHTML = "";
   
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    .then(response => response.json()) //response json

    .then(data => {
        data.forEach(image => {
            // create the image element
            const img = document.createElement("img");
            img.src = image.url
            // append to the div gallary
            gallery.appendChild(img)
        })
    })

    .catch(err => {
        console.log("error fetching the data", err);
    })
}

loadBtn.addEventListener("click", getImages)


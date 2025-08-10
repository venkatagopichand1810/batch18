const fetchData = new Promise((resolve, reject) => {
    let dataLoaded = false;

    setTimeout(() => {
        if(dataLoaded){
            resolve("Data is loaded successfully")
        } else {
            reject("Failed to load the data")
        }
    }, 2000)
})

fetchData
    .then((data) => {
        console.log(data)
    })

    .catch((error) => {
        console.log(error)
    })
    
    .finally(() => {
        console.log("operation is completed")
    })

// callback hell...muliple nested callbacks

function step1(callback){
    setTimeout(() => {
        console.log("Pizza is ordered");
        callback();
    }, 1000)
}


function step2(callback){
    setTimeout(() => {
        console.log("Preparing pizza");
        callback();
    }, 1000)
}

function step3(callback){
    setTimeout(() => {
        console.log("Delivery agent assigned");
        callback();
    }, 1000)
}

function step4(callback){
    setTimeout(() => {
        console.log("out for delivery");
        callback();
    }, 1000)
}


function step5(callback){
    setTimeout(() => {
        console.log("Delivered");
        callback();
    }, 1000)
}


step1(() => {
    step2(() => {
        step3(() => {
            step4(() => {
                step5(() => {
                    console.log("Delivered and recived by the customer")
                })
            })
        })
    })
})
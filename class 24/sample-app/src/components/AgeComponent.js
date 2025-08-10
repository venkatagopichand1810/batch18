
function AgeComponent () {
    const age1 = 20;
    let message = ""
  
    if(age1 >= 18){
      message =  "you are an adult"
    } else {
      message =  "you are minor"
    }
    // return message;

    return (
        <>
                <p style={{backgroundColor: "green"}}>{message}</p>
        </>
    )
}

export default AgeComponent
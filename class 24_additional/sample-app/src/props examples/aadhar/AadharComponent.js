

function AadharComponent({name, aadharnumber, children}) {

    return(
        <>
            <h1>{children}</h1>
            <h2>Aadhar Name is: <strong>{name}</strong></h2>
            <h3>Aadhar Number is: <strong>{aadharnumber}</strong></h3>
        </>
    )

}

export default AadharComponent


// when the data is immutable then only prop..
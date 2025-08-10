
// function Child(props) {
//     const upperCaseName = props.name.toUpperCase();
//     const upperCaseCity = props.name.toUpperCase();



//     return (
//         <>
//             <p>Name is : {upperCaseName}  <br></br>
//             City is: <strong>{upperCaseCity}</strong>
//             </p>  
//             <br></br>
           
//         </>
//     )

// }

// export default Child


function Child({name, city, state}) {

// const name = "venkat";
// const city = "bangalore";
// props.name = "venkat";
// const {name, city, state} = props;

    return (
        <>
            <p>Name is : <strong>{name}</strong>  <br></br>
            City is: <strong>{city}</strong><br></br>
            State is: <strong>{state}</strong>
            </p>  
            <br></br>
           
        </>
    )

}

export default Child
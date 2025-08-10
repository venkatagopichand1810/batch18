
import Child from "./Child"
import { useState } from "react";
function App() {

    const[venkatData, setVenkatData] = useState({});

    // differnt types of data we can send
    const numberProp = 40;
    const stringProp = "hello world";
    const booleanProp = true;
    const arrayProp = [1, 2, 3, 4,5];
    const objectyProp = {name: "Venkat", age:30}


    return (
        <>
        <h1>App Component</h1>
        <p>Venkat data: Name is: {venkatData.name} and age is {venkatData.age}</p>
        <Child
            number = {numberProp}
            text = {stringProp}
            isAvailable = {booleanProp}
            numbers = {arrayProp}
            user = {objectyProp}
            sendVenkat = {setVenkatData}

        />
       
        </>
    )
}

export default App
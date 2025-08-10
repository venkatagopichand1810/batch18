
import "./App.css";
function App() {
    const name = "venkat";
    const age = 20;
    const istrue = true;
    const hello = () => {
        alert("hello sir")
    }
    const venkat = {
        color: "green",
        fontSize: "55px",
        fontWeight: "bold",
        backgroundColor: "black"
    }
    return (
        <>
            <h1>Hello venkata</h1>
            <p>This is some paragraph</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s" alt="venkat" />
            <input type="text" />
            {/* data binding or interpolation */}
            Name is: {name}
            Age is: {age}
            isTrue: {istrue}
            {2 + 3}
            <br />
            <label htmlFor="name">Enter your name</label>
            <input type="text" placeholder="Enter your name" id="name" />
            <button onClick={hello}>click</button>
            <p style={{ color: "green", fontSize: "55px", fontWeight: "bold" }}>
                This is paragraph
            </p>
            <p style={venkat}>
                This is paragraph
            </p>
            <p className = "para">
                This is paragraph
            </p>
        </>
    )
}

export default App





// jsx -> javascript xml (html + js)
// we must and should have one parent element, and we have wrap all the elements inside the parent element


function Child(props) {

    return (
        <div>
            <h2>Child component</h2>
            <p>Count from the parent: {props.count}</p>
            <button onClick={props.increment}>Incremnt</button>
        </div>
    )

}

export default Child
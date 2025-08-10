
function ChildComponent({data}) {

    const sendDataToParent = () => {
        data("venkat child")
    }



    return (
        <div>
            <h2>Child Component</h2>
            <button onClick = {sendDataToParent}>Submit</button>
        </div>
    )
}

export default ChildComponent



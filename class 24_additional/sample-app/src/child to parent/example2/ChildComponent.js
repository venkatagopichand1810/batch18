
function ChildComponent({data}) {

    const sendDataToParent = () => {
        const user = {
            name: "venkat",
            age: 30, 
            city: "bangalore",
            state: "KA",
            country: "INDIA"
        }
        data(user)
    }



    return (
        <div>
            <h2>Child Component</h2>
            <button onClick = {sendDataToParent}>Submit</button>
        </div>
    )
}

export default ChildComponent



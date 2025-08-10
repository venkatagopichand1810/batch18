

function Child({ number, text, isAvailable, numbers, user, sendVenkat}) {

    const venkatData = {
        name: "venkataaa",
        age: 30
    }

    return (
        <>
            <p><strong>Number:</strong>{number}</p>
            <p><strong>String:</strong>{text}</p>
            <p><strong>Boolean:</strong>{isAvailable ? "Venkat" : "Rama"}</p>
            <p><strong>Array:</strong>{numbers.join(", ")}</p>
            <p><strong>Object:</strong>Name is: {user.name}, age is: {user.age}</p>

            <button onClick={() => sendVenkat(venkatData)}>
                Send to parent
            </button>
        </>
    )

}

export default Child


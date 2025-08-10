

function Child({accessories}) {

    return (
        <>
            <p>Student Stationary</p>
            <ul>
                {accessories.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}

            </ul>
        </>
    )

}

export default Child
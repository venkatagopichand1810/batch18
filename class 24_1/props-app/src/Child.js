function Child({name, age, user, hobbies, jsonData, children, users}){


    return (
        <>
        <strong><u>{children}</u></strong>
        <p><strong>Name:</strong>{name}</p>
        <p><strong>Age:</strong>{age}</p>
        <p><strong>User Info:</strong>{user.id}, {user.email}</p>

        {/* array */}
        <p><strong>Hobbies</strong></p>
        <ul>
            {hobbies.map((hobby) => (
                <li>{hobby}</li>
            ))}
        </ul>

        <div>
            User data:
            <p>Status: {jsonData.status}</p>
            <p>id: {jsonData.data.id}</p>
            <p>Title: {jsonData.data.title}</p>
            <p>Content: {jsonData.data.content}</p>
        </div>

        <div>
            {users.map((user) => (
                <div key = {user.id}>
                    {user.id}
                    {/* {user.name}<br></br> */}
                    {user.adddress.city}
                </div>
            ))}
        </div>
        </>
    )
}

export default Child
import { useState } from "react"

function Register() {

    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[error, setError] = useState("");
    const[message, setMessage] = useState("");

    // function to handle the form submission

    const handleSubmit = async(e) => {
        e.preventDefault();

        const user = {username, email, password};
        setError("")
        setMessage("")

        try {
            const res = await fetch("http://localhost:5005/api/users/register", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(user)
            })

            if(res.ok){
                const data = await res.json();
                setMessage(data.message || "Registration successfull");
                setUsername("");
                setEmail("");
                setPassword("")
            } else {
                const error = await res.json();
                setError("Registration is not successfull")
            }

        } catch(error){
            setError("Registration failed")
        }
    }



    return(
        <div className="bg-info-subtle p-5 rounded ">
            <form onSubmit={handleSubmit}>
                <h1 className="mb-4 text-primary text-center">Register Page</h1>

                {message && <div className="alert alert-success">{message}</div>}
                {error && <div className="alert alert-primary">{error}</div>}

                <div className = "mb-3">
                    <label className="form-label fw-bold">Username</label>
                    <input 
                        type="text"
                        placeholder="Enter the username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="form-control"
                    />
                </div>

                
                <div className = "mb-3">
                    <label className="form-label fw-bold">Email</label>
                    <input 
                        type="email"
                        placeholder="Enter the email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                         className="form-control"
                    />
                </div>

                
                <div className = "mb-3">
                    <label className="form-label fw-bold">Password</label>
                    <input 
                        type="password"
                        placeholder="Enter the password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                         className="form-control"
                    />
                </div>

                <button type="submit" className="mb-3 btn btn-success">Register</button>
            </form>
        </div>
    )


}

export default Register
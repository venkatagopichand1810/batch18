import { useState } from "react"



function PasswordReset() {

    const[email, setEmail] = useState("");
    const[error, setError] = useState("");
    const[message, setMessage] = useState("");

    // function to handle the form submission

    const handleSubmit = async(e) => {
        e.preventDefault();

        setError("")
        setMessage("")

        try {
            const res = await fetch("http://localhost:5005/api/users/password-reset", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({email})
            })

            if(res.ok){
                const data = await res.json();
                setMessage(data.message || "Password reset link sent sucessfully");
                setEmail("");
             
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
                <h1 className="mb-4 text-primary text-center">Password Reset Link page</h1>

                {message && <div className="alert alert-success">{message}</div>}
                {error && <div className="alert alert-primary">{error}</div>}

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

                <button type="submit" className="mb-3 btn btn-success">Sent Reset Link</button>
            </form>
        </div>
    )


}

export default PasswordReset
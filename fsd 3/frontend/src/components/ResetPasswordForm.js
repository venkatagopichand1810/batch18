import { useState } from "react";
import { useParams } from "react-router-dom";



function ResetPasswordForm() {

    const {token} = useParams(); //extracting token from the url 

    const[password, setPassword] = useState("");
    const[error, setError] = useState("");
    const[message, setMessage] = useState("");

    // function to handle the form submission

    const handleSubmit = async(e) => {
        e.preventDefault();

        setError("")
        setMessage("")

        try {
            const res = await fetch(`http://localhost:5005/api/users/reset-password/${token}`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({password})
            })

            if(res.ok){
                const data = await res.json();
                setMessage(data.message || "Password reset successfully");
                setPassword("")
            } else {
                const error = await res.json();
                setError("Password is not reset successfully")
            }

        } catch(error){
            setError("Reset failed")
        }
    }



    return(
        <div className="bg-success-subtle p-5 rounded ">
            <form onSubmit={handleSubmit}>
                <h1 className="mb-4 text-primary text-center">Reset Password</h1>

                {message && <div className="alert alert-success">{message}</div>}
                {error && <div className="alert alert-primary">{error}</div>}
        

                
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

                <button type="submit" className="mb-3 btn btn-success">Reset Password</button>
            </form>
        </div>
    )


}

export default ResetPasswordForm
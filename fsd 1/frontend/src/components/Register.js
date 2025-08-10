import { useState } from "react"; // to maintain the state
import api from "../api"; 

function Register() {

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[message, setMessage] = useState("");

    // form submit handle
    // http://localhost:5004/api/users/register

    const handleSubmit = async(e) => {
        e.preventDefault(); //to persist the form data after submission
        try{
            await api.post("/register", {name, email, password});
            setMessage("Registration is successfull");
            setName("");
            setEmail("");
            setPassword("")

        } catch(error){
            console.log(error)
        }
    }

    return(

        <div className="register">
            <h1>User Registration Form</h1>
            {message && <p>{message}</p>}

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} required
                    />
                </div>

                 <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>

                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>

                <button type="submit">Register Now</button>
            </form>
        </div>
    )

}

export default Register
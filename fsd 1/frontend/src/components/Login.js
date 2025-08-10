import { useState } from "react"; // to maintain the state
import api from "../api"; 
import {useNavigate} from "react-router-dom";

function Login() {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[message, setMessage] = useState("");
    const navigate = useNavigate();

    // form submit handle

    const handleSubmit = async(e) => {
        e.preventDefault(); //to persist the form data after submission
        try{
            await api.post("/login", {email, password});
            setMessage("Login is successfull");
            navigate("/landing")

        } catch(error){
            console.log(error)
        }
    }

    return(

        <div className="login">
            <h1>User Login Form</h1>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                 <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>

                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>

                <button type="submit">Login Now</button>
            </form>
        </div>
    )

}

export default Login
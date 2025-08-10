
import { useUser } from "../context/UserContext";
function LoginForm() {
    // final component uses the props
    const {username, password} = useUser();

    return (
        <>
        <div>
            <h4>Login Form</h4>
            <p><strong>Username</strong>{username}</p>
            <p><strong>Password</strong>{password}</p>
        </div>
        </>
    )

}

export default LoginForm
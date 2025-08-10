import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Register from "./components/Register";
import PasswordReset from "./components/PasswordReset";
import ResetPasswordForm from "./components/ResetPasswordForm";
import "./App.css"

function App(){
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
      <Router>
        <Routes>
          <Route path="/" element = {<Register />}/>
          <Route path="/password-reset" element = {<PasswordReset />} />
          <Route path="/reset-passowrd/:token" element = {<ResetPasswordForm /> } />
        </Routes>
      </Router>

    </div>
  )
}

export default App
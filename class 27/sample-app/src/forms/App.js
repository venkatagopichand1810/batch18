
import LoginForm from "./components/LoginForm"
import RegistrationForm from "./components/RegistrationForm"
import DisplayData from "./components/DisplayData"
import { useState } from "react";
import "./App.css"


function App() {

  const[isLoggedIn, setIsLoggedIn] = useState(false); //statet to check if the user has logged in 
  const[userData, setUserData] = useState(null); //state to store the submitted user registartion data


  return (

    <div>
      {!isLoggedIn ? (
        // if not logged in, show the login form
        <LoginForm onLogin = {() => setIsLoggedIn(true)}/>
      ): userData ? (
        // if logged in and form is submitted, show the submitted data
        <DisplayData data = {userData} />
      ) : (
        // if logged in but data is not submitted, show the registration form
        <RegistrationForm onSubmit = {(data) => setUserData(data)} />
      )}
    </div>
  )

}
export default App
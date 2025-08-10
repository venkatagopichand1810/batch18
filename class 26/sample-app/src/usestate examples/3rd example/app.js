
import { useState } from "react";

function App() {
  // state variable for the theme
  const[darkMode, setDarkMode] = useState(false);
  // darekmode = false


  const styles = {
    backgroundColor: darkMode ? "black" : "white",
    color: darkMode ? "orange" : "green",
    padding: "20px",
    textAlign: "center"
  }

  return (
    <div style={styles}>
      <h2>{darkMode ? 'Dark Mode' : 'light mode'}</h2>
      <button onClick = {() => setDarkMode(!darkMode)}> 
        Toggle Theme
      </button>
    </div>
  )

}

export default App


//!false = true
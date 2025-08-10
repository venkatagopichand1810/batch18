import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Register from "./components/Register";
import Login from "./components/Login";
import Landing from "./components/Landing";
import "./App.css"

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>

      </div>
    </Router>
  )

}

export default App
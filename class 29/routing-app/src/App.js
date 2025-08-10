
import StudentList from "./components/StudentList";
import StudentDetails from "./components/StudentDetails";
import {Routes, Route} from "react-router-dom";
import './App.css';

function App() {

  return(
    <div className="app-container">
      <h1 className="title">Student Management System</h1>
      <Routes>
          <Route path="/" element = {<StudentList />} />
          <Route path="/student/:id" element = {<StudentDetails />} />
      </Routes>
    </div>
  )

}

export default App
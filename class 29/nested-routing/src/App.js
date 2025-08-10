
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Dashboard/Profile";
import Settings from "./components/Dashboard/Settings";
import About from "./components/About";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom"
import MainLayout from "./MainLayout";
function App() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        {/* nested routes under the /dashboard */}
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

      </Route>
    </Routes>
  )

}

export default App
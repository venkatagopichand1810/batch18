

// React Router is the library for routing in react applications, 
// it will allow us to create Single Page Applications
// with navigation but without refreshing the page

import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import PageNotFound from "./pages/PageNotFound"

function App() {
  return (
    <div>
     <Navbar />

    {/* // we have add Routes section and inside Routes we have 
    // individual route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element = {<PageNotFound />} />
      </Routes>
    </div>
  )

}

export default App
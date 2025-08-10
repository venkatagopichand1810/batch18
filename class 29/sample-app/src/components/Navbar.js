import "./Navbar.css"
import { Link, NavLink } from "react-router-dom"

function Navbar() {


    return (
        <>

            <nav className="navbar">
                <NavLink to="/" className="nav-link" activeclassname = "active">Home</NavLink>
                <NavLink to="/about" className="nav-link" activeclassname = "active">About</NavLink>
                <NavLink to="/contact" className="nav-link" activeclassname = "active">Contact</NavLink>
            </nav>

        </>
    )
}

export default Navbar
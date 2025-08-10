
import { Link,Outlet } from "react-router-dom"

function MainLayout() {

    return (
        <div>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/dashboard">Dashboard</Link>
            </nav>
            <hr />
            <Outlet />
        </div>
    )


}

export default MainLayout
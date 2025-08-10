

import { Link, Outlet } from "react-router-dom"

function Dashboard() {

    return (

        <>
            <h1>Dashboard</h1>

            <div>
                <nav>
                    <Link to="profile">Profile</Link>
                    <Link to="settings">Settings</Link>
                </nav>
                <hr />
                <Outlet />
            </div>
        </>
    )

}

export default Dashboard

import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
function Layout() {

    return (
        <div className="layout">
            <Header />
            <div className="main-content">
                <Sidebar />
                <div className="page-content">
                    <h2>Welcome to the GUVI Shopping Site</h2>
                    <p>Shop what you want!!!!!!!!!!!!!!!!!!!!!!!!!!!!</p>
                </div>
            </div>
            <Footer />
        </div>
    )

}

export default Layout

// how to create the component is react....function
import "./Header.css"

function Header() {

    const headerStyle = {
        backgroundColor: "orange",
        color: "white",
        fontSize: "55px"
    }

    return (
        <>
            {/* <div style={{backgroundColor: "orange", color: "white", fontSize: "55px"}}>
                Header of the page
            </div> */}

            {/* <div style={headerStyle}>
                Header of the page
            </div> */}

            <div className = "header">
                Header of the page
            </div>
        </>
    )

}

export default Header


// different ways to apply styles

// inline, internal and exteranl

// background-color: "orange"
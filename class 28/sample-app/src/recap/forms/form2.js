
import { useRef } from "react";


function App() {
    // we have the create the refs for name and email inputs
    const nameRef = useRef(null);
    const emailRef = useRef(null);


    const handleSubmit = (e) => {
        e.preventDefault(); //this will stop the from reloading...stop the default behaviour of the form reloading
        // acces the input values using ref
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        
        alert(`Name: ${name}\n Email: ${email}`)
    }



    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text"
                        ref={nameRef}
                    
                    />
                </div>
                <br />
                 <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email"
                        ref={emailRef}
                       
                    />
                </div>
                <br />
                <button type="submit">Submit</button>

            </form>

        </div>
    )

}

export default App


// onSubmit, onchange on the input fields plus we have to useState
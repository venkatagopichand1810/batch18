
import { useState } from "react";


function App() {
    // define the state variables

    const[name, setName] = useState('');
    
    const[email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); //this will stop the from reloading...stop the default behaviour of the form reloading
        alert(`Name: ${name}\n Email: ${email}`)
    }



    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <br />
                 <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
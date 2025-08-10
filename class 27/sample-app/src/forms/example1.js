
import { useState } from "react";

function App() {

  // state for the input fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  // state variables for the errors
  const [error, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  })


  // for handling the input changes
  const handleChange = (e) => {
    const { name, value } = e.target; //destructure the name and value from the event target
    setFormData({
      ...formData, //spread the current state
      [name]: value //update the specific field based on the inputs name attribute 
    })

  }

  // validate the form input fields

  const validate = () => {
    let tempErros = {}; //tempobject to store the errors
    if (!formData.name) {
      tempErros.name = "Name is required"
    }

    if (!formData.email) {
      tempErros.name = "Email is required"
    }


    if (!formData.message) {
      tempErros.name = "Message is required"
    }
    setErrors(tempErros);

    return Object.keys(tempErros).length === 0; 
  }


  const handleSubmit = (e) => {
    e.preventDefault(); //prevning the page reload...
    if (validate()) {
      console.log("Form submitted", formData)
    }

  }

  return (

    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Enter your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        // in order the detect the input changes we are using onchange event with the handlechange function

        />
        {error.name && <p>{error.name}</p>}
      </div>


      <div>
        <label htmlFor="email">Enter your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}

        />
        {error.email && <p>{error.email}</p>}
      </div>


      <div>
        <label htmlFor="message">Enter your message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}

        />
        {error.message && <p>{error.message}</p>}
      </div>

      <button type="submit">Submit</button>


    </form>
  )

}


export default App


//form -> password -> useState


//if we dont change any value, or any state.. props
//if wanted to change... useState ...forms useState

//name email comments
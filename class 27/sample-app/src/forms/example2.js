
//controlled forms

// in controlled components, the form element values are bound with react state. we must and should use the useState for the controlled forms

//uncontrlled forms: form values are not diectly bound with react state, instead we can use useRef hook to access the DOM elements


// import { useState } from "react"

// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState('');

//   // handle input changes
//   const handleNameChange = (e) => setName(e.target.value);

//   const handleEmailChange = (e) => setEmail(e.target.value)


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted the name", name)
//     console.log("Submitted the email", email)
//   }

//   return (

//     <form onSubmit={handleSubmit}>

//       <input
//         type="text"
//         value={name}
//         onChange={handleNameChange}
//         placeholder="Enter your name"
//       />
//       <input
//         type="email"
//         value={email}
//         onChange={handleEmailChange}
//         placeholder="Enter your email"
//       />

//       <button type="submit">Submit</button>
//     </form>
//   )

// }

// export default App



import { useRef } from "react"

function App() {
  const nameRef = useRef();
  const emailRef = useRef();


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted the name", nameRef.current.value)
    console.log("Submitted the email", emailRef.current.value)
  }

  return (

    <form onSubmit={handleSubmit}>

      <input
        type="text"
        ref={nameRef}
      
        placeholder="Enter your name"
      />
      <input
        type="email"
        ref={emailRef}
   
        placeholder="Enter your email"
      />

      <button type="submit">Submit</button>
    </form>
  )

}

export default App

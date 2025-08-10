
import { useState } from "react"

function RegistrationForm({ onSubmit }) {

    // state to store the input fields

    const [formData, setFormData] = useState({
        fullName: '',
        dob: '',
        gender: '',
        address: '',
        mobile: '',
        email: ''
    })

    // for handling the input changes
    const handleChange = (e) => {
        const { name, value } = e.target; //destructure the name and value from the event target
        setFormData({
            ...formData, //spread the current state
            [name]: value //update the specific field based on the inputs name attribute 
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault(); //prevning the page reload...
        onSubmit(formData)

    }


    return (
        <form onSubmit={handleSubmit}>
            <h2>Registration</h2>

            <input
                type="text"
                name="fullname"
                placeholder="Enter the full name"
                value={formData.fullName}
                onChange={handleChange}
                required
            />

            <input
                type="date"
                name="dob"
                placeholder="Enter the dob"
                value={formData.dob}
                onChange={handleChange}
                required
            />

            <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
            >
                <option value=''>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Transgender</option>


            </select>

            <textarea
                id="message"
                name="message"
                value={formData.address}
                onChange={handleChange}

            />

            <input
                type="tel"
                name="mobile"
                placeholder="Enter the mobile number"
                value={formData.mobile}
                onChange={handleChange}
                required
            />

            <input
                type="email"
                name="email"
                placeholder="Enter the email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <button type="submit">Submit</button>

        </form>
    )

}

export default RegistrationForm
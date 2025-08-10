
import axios from "axios";

// set the base url for the backend

const api = axios.create({
    baseURL: "http://localhost:5004/api/users", //our backend URL
})

export default api
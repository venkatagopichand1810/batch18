
import { createContext, useContext } from "react";

// create the context
const UserContext = createContext();


// provider componant to wrap the app
export const UserProvider = ({children}) => {

    const username = "flipkart_user";
    const password = "welcome12345";

    return (
        <UserContext.Provider value={{username, password}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)
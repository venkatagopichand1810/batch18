
import { createContext, useContext } from "react";

// create the context
const MessageContext = createContext();

// create a provider componnet to wrap the app

export const MessageProvider = ({children}) => {
    // define the value that to needs to share
      const message = "Hello SIR I AM HERE ";

      return (
        // provide the message value to all our children components
        <MessageContext.Provider value={message}>
            {children}    
        </MessageContext.Provider>
      )
}

//custom hook
export const useMessage = () => useContext(MessageContext)



//after the creating the createContext..we have to proivde the value to all the children component

// 50%
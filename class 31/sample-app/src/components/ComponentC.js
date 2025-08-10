import ComponentD from "./ComponentD"
import { useMessage } from "../context/MessageContext"; 

function ComponentC() {
    
    //access the context value directly
    const message = useMessage()

    return (
        <>

        
            <ComponentD  />
              <h1>componentc: {message}</h1>
        </>
    )

}

export default ComponentC
import { useMessage } from "../context/MessageContext"; // import the custom hook to get the message from the context


function ComponentF() {

    //access the context value directly
    const message = useMessage()
    return (
        <>
            <h1>componentF: {message}</h1>
        </>
    )

}

export default ComponentF
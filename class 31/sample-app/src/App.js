
import ComponentA from "./components/ComponentA";
import { MessageProvider } from "./context/MessageContext";

function App() {
  //  I need to pass some message to deepest component...componentF
  // const message = "Hello from app to componentF";

  return (
    <div>
      {/* wrap the entire component tree with the context  provider */}
      <MessageProvider>
        <ComponentA  />
      </MessageProvider>

    </div>
  )

}

export default App
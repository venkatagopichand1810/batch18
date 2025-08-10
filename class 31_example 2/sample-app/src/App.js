
import Header from "./components/Header";

import { UserProvider } from "./context/UserContext";

function App() {

  // login data


  return (
    <div>
      <UserProvider>
        <Header />
      </UserProvider>

    </div>
  )
}

export default App
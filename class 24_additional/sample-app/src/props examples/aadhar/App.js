import AadharComponent from "./AadharComponent"

function App() {


  // object...as a prop to aadhar component
  const aadharData = {
    name: "Venkata Gopichand",
    aadharNumber: 34394394739
  }

  return (
    <div>
      <AadharComponent name = {aadharData.name} aadharnumber = {aadharData.aadharNumber}>
          Your Aadhar Details
      </AadharComponent>
    </div>
  )



}

export default App
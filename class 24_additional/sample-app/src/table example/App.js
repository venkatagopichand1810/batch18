
import Table from "./Table";

function App() {

  const columns = ["Name", "Age", "City"];

  const data = [
      {Name: "RAM", Age: 25, City: "Chennai"},
      {Name: "jack", Age: 19, City: "Bangalore"},
      {Name: "jane", Age: 36, City: "Hyderbad"},
      {Name: "charlie", Age: 55, City: "Delhi"},

  ];

  return (
      <div>
          <Table columns = {columns} data = {data}/>
      </div>
  )

}

export default App
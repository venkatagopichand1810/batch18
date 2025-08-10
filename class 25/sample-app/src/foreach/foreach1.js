

function App() {

    const options = [
      {value: "volvo", label: "volvo cars"},
      {value: "saab", label: "saab cars"},
      {value: "audi", label: "audi cars"},
  
    ];
  
    const dropdownOptions = [];
  
    options.forEach(option => {
      dropdownOptions.push(
        <option key = {option.value} value = {option.value}>
          {option.label}
        </option>
      )
    });
  
  
    return (
      <div>
        <h2>Select cars</h2>
        <select>
            {dropdownOptions}
        </select>
      </div>
    )
  
  }
  
  
  export default App
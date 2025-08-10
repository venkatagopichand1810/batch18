//useReducer....hook for managing the complex state in react.

// const[state, dispatch] = useReducer(reducer, initialstate)

//1) state: the current state of the component which is going to update based on the action.
//2) dispatch: action that will tell how the state should update
//3) reducer: reducer function determines how the state updates based on the dispatched action (state, action)


import Counter from "./component/Counter"

function App() {

  return (
    <>
      <Counter />
    </>
  )

}

export default App
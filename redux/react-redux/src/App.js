import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/actions";
function App() {
  // get the current count from the redux state
  const count = useSelector((state) => state.count)
  // in the above syntax -> state the entire redux store
  //state.count -> the specifid piece of state which we want toe xtract
  //useSelector returns the data the component

  //useSelector: reads data from the redux store
  //useDispatch : sends the actions to the redux store

  // we are using the dispatch function from react redux to send the actions
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )

}

export default App
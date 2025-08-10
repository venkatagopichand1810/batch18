
// createStore to create the redux store
import {createStore} from "redux";

// import the reducer
import counterReducer from "./reducer";

// create the store using the reducer
const store = createStore(counterReducer);


//export the store 
export default store;









// redux ...
//redux toolkit, redux thunk
//redux saga
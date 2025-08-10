// initial state of the app
const initialState = {
    count: 0
};
// reducer function which is going accepts the current state and action 
const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case "INCREMENT" :
            return {
                ...state,
                count: state.count+ 1
            };
        
        case "DECREMENT":
            return {
                ...state,
                count: state.count-1
            }
        
        // default state
        default:
            return state;
    }
}

// export the reducer to use in store
export default counterReducer
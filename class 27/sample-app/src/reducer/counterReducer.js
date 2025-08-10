
// reducer function based on the action type state will update

export const counterReducer = (state, action) => {
    switch(action.type){
        case "INCREMENT" :
            return {count: state.count + 1}
        case "DECREMENT" :
            return {count: state.count - 1}
        case "RESET" :
            return {count: 0}
        default:
            return state; //return the current state
    }
}
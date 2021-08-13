// This is grabbing the string from the actions.js file
import {
    ADD_ONE,
    MINUS_ONE
} from './actions/actions';

// This is where we can record our intitial state, which is an object

const initialState = {
    number: 0
};

// Now we need a REDUCER function that takes in: 
// 1. State
// 2. An Action, which define how we go about changing state

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ONE:
            return {
                number: state.number + 1
            };
        case MINUS_ONE:
            return {
                number: state.number - 1
            };
        default:
            return state;
    }
}
export default reducer;
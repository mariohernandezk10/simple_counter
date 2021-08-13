// this import can only work because of:
// npm i redux react-redux
// Which can be found in the package.json
import {
    createStore
} from 'redux';

// this reducer function that is being imported is from the reducer.js file
import reducer from './reducers';

// This is an edit to the original because we added redux devtools extension on chrome
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


// the reducer function is being passed into the createStore() function which is from "redux"
// const store = createStore(reducer);
// we don't need the old const store because we added the devtools extension

export default store;
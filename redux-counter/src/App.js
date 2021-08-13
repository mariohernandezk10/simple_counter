import React from 'react';
import './App.css';
import Counter from './components/Counter';

// ONLY be able to use b/c of npm i react-redux, which is in the package.json
import { Provider } from 'react-redux';
// store is the function from createStore(), which is from the "redux" which has the reducer function as a parameter
import store from './store';


function App () {
  return (
    <>
    {/* here is where we add the store, which brings everything together */}
    <Provider store={store}>
      {/* this means that any child (Counter) of the Provider component can access our store */}
      <Counter />
    </Provider>
    </>
  );
}
export default App;

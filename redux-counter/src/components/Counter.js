import React, {
    Component
} from 'react';

// to CONNECT our Counter component to our store, we need to import "connect", which is a higher order function, from the "react-redux" 
import {
    connect
} from "react-redux";

// Just a regular function that allows access to number from our Redux state, in the reducer.js file, as a prop inside our componenent
const mapStateToProps = (state) => {
    return {
        number: state.number
    }
}

const containerStyle = {
    display: 'flex'
}
const buttonStyle = {
    fontSize: '1.5rem',
    width: '40px',
    height: '40px'
}

class Counter extends Component {

    // We can use the "dispatch" prop (by calling this.prop.dispatch) to link each method of our component with an action
    addOne = () => {
        this.props.dispatch({
            type: 'ADD_ONE'
        });
    }

    minusOne = () => {
        this.props.dispatch({
            type: 'MINUS_ONE'
        });
    }

    render() {
        return (
          <div className="App" >
            <header className="App-header">
              <h1>{this.props.number}</h1>
              <div style={containerStyle}>
                <button onClick={this.minusOne} type="button" style={buttonStyle}>-</button>
                <button onClick={this.addOne} type="button" style={buttonStyle}>+</button>
              </div>
            </header>
          </div>
        );
    }
}

// The code below is no longer necessary because "Counter" is now inside the "connect" higher order function along with the regular function.
// export default Counter;
// We need to wrap our component in the "connect" function, passing in mapStateToProps. 
export default connect(mapStateToProps)(Counter);


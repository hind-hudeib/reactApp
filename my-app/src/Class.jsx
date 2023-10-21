// Component is a class that you extend to create class components
import React, { Component } from "react";

export default class Class extends Component {
  // The constructor method is a special method in JavaScript that
  //  is called when an object of the class is created.
  //  In this case, it's used to initialize the component's state.
  constructor(props) {
    // After calling super(props) and ensuring that the parent class's constructor has
    // executed correctly,the child component (in this case, Class) proceeds
    // to initialize its own state.
    super(props);
    //  state is an object that contains data that can change over time
    this.state = {
      count: 0,
    };
  }

//   componentDidUpdate() {
//     console.log('Component re-rendered');
//   }
  render() {
    return (
      <div>
        {/* The value of this.state.count is dynamic and will be updated whenever the 
        state changes. */}
        <p>Count: {this.state.count}</p>
        {/* arrow function calls this.setState, which is a React method used to update the
         component's state.It takes the current state and increments the count property by 1. */}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
// When you click the "Increment" button, the onClick handler increases the count state,
// and the component re-renders to reflect the updated count value on the screen.


import React, { Component } from "react";

export class Child extends Component {
  render() {
    const { greeting } = this.props;

    return (
      <div>
        <h3> {greeting}</h3>
      </div>
    );
  }
}

export default Child;

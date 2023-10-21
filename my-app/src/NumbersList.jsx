import React, { Component } from "react";

class NumbersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: [5, 2, 8, 1, 9, 3, 6, 4, 7],
    };
  }

  render() {
    const filteredNumbers = this.state.numbers.filter(
      (number) => number % 2 === 0
    );
    // The use of the spread operator is important here because it ensures that
    // the original (this.state.numbers) array remains unchanged. Sorting the original array
    // directly with .sort() would modify the original array, which might not be desired
    // if you want to preserve the original data. By creating a copy, you can sort the copy
    // without affecting the original array.
    const sortedNumbers = [...this.state.numbers].sort((a, b) => a - b);
    // a - b is a way to sort elements in ascending order.
    // If you wanted to sort in descending order, you would use b - a instead.
    return (
      <div>
        <h2>Numbers List</h2>
        <div>
          <h3>Original Numbers</h3>
          <ul>
            {this.state.numbers.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Filtered Even Numbers</h3>
          <ul>
            {filteredNumbers.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Sorted Numbers</h3>
          <ul>
            {sortedNumbers.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default NumbersList;

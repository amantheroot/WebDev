import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  constructor() {
    super();
    console.log("Counters - Constructed");
  }
  componentDidMount() {
    console.log("Counters - Mounted");
  }
  componentDidUpdate() {
    console.log("Counters - Updated");
  }
  render() {
    console.log("Counters - Rendered");
    const { counters, onReset, onIncrement, onDelete } = this.props;
    return (
      <React.Fragment>
        <button onClick={onReset} className="btn btn-sm btn-primary m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;

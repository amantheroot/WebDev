import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    console.log("Counter - Constructed");
  }
  componentDidMount() {
    console.log("Counter - Mounted");
  }
  componentDidUpdate(prevprops, prevstate) {
    console.log("Counter - Updated");
    console.log("Prevprops: ", prevprops);
    console.log("Prevstate: ", prevstate);
    if (prevprops.counter.value !== this.props.counter.value) {
      console.log("Value Changed!");
    }
  }
  componentWillUnmount() {
    console.log("Counter - Unmounted");
  }
  render() {
    console.log("Counter - Rendered");
    const { onIncrement, onDelete, counter } = this.props;
    const { id } = counter;
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => onDelete(id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let counterClass = "badge m-2 badge-";
    counterClass += this.props.counter.value === 0 ? "warning" : "primary";
    return counterClass;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

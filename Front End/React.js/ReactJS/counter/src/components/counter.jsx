import React, { Component } from "react";

class Counter extends Component {
  state = {};
  getBadgeColor() {
    let badgeClass = "badge badge-";
    badgeClass += this.props.counter.value === 0 ? "warning" : "primary";
    return badgeClass;
  }
  getCount() {
    return this.props.counter.value === 0 ? "zero" : this.props.counter.value;
  }
  decrementDisable() {
    return this.props.counter.value === 0 ? true : false;
  }
  render() {
    return (
      <div>
        <span className={this.getBadgeColor()}>{this.getCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-md m-1"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-md m-1"
          disabled={this.decrementDisable()}
        >
          −
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter)}
          className="btn btn-danger btn-md m-1"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;

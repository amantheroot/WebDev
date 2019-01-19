import React, { Component } from "react";

class Decimal extends Component {
  state = {};
  render() {
    return (
      <button className="decimal" onClick={this.props.onDecimalPress}>
        .
      </button>
    );
  }
}

export default Decimal;

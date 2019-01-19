import React, { Component } from "react";

class Equals extends Component {
  state = {};
  render() {
    return (
      <button className="equals" onClick={this.props.onEqualsPress}>
        =
      </button>
    );
  }
}

export default Equals;

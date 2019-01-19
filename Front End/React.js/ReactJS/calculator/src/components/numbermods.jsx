import React, { Component } from "react";

class NumberMods extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <button className="AC" onClick={() => this.props.onNumModPress("AC")}>
          {this.props.clear}
        </button>
        <button
          className="plus-minus"
          onClick={() => this.props.onNumModPress("+/-")}
        >
          +/-
        </button>
        <button
          className="percent"
          onClick={() => this.props.onNumModPress("%")}
        >
          %
        </button>
      </React.Fragment>
    );
  }
}

export default NumberMods;

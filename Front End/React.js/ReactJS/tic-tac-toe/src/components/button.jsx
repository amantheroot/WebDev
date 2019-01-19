import React, { Component } from "react";

class Button extends Component {
  getButtonText() {
    let text = "Go to ";
    text +=
      this.props.hist.move === 0
        ? "game start"
        : "move #" + this.props.hist.move;
    return text;
  }
  render() {
    return (
      <button onClick={() => this.props.onBtnClick(this.props.hist)}>
        {this.getButtonText()}
      </button>
    );
  }
}

export default Button;

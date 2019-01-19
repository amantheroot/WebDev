import React, { Component } from "react";

class Display extends Component {
  render() {
    let number = this.props.number;
    let fontSize = 2.5;
    if (number) {
      let length = number.toString().length;
      if (length > 6) {
        fontSize = 2;
      }
      if (length > 8) {
        fontSize = 1.5;
      }
      if (length > 11) {
        fontSize = 1.25;
      }
      if (length > 13) {
        fontSize = 1.1;
      }
      if (length > 15) {
        fontSize = 0.9;
      }
      if (length > 17) {
        fontSize = 0.8;
      }
    }

    let styles = {
      fontSize: fontSize + "em"
    };

    return (
      <div style={styles} className="display">
        <div className="displayNumber">{number}</div>
      </div>
    );
  }
}

export default Display;

import React, { Component } from "react";

class Box extends Component {
  render() {
    return (
      <div onClick={() => this.props.onClick(this.props.box)} className="box">
        {this.props.children}
      </div>
    );
  }
}

export default Box;

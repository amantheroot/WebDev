import React, { Component } from "react";

class SubTotal extends Component {
  render() {
    return (
      <div className="cart__subtotal">
        <span>SUBTOTAL</span>
        <span>₹ {this.props.subtotal}</span>
      </div>
    );
  }
}

export default SubTotal;

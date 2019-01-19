import React, { Component } from "react";

class CartHeader extends Component {
  state = {};
  render() {
    return (
      <div className="cart__header">
        {this.props.children}
        <span>Cart</span>
      </div>
    );
  }
}

export default CartHeader;

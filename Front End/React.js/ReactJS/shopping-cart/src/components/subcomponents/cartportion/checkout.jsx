import React, { Component } from "react";

class Checkout extends Component {
  state = {};
  render() {
    return (
      <div className="cart__checkout">
        <button onClick={() => this.props.onCheckout(this.props.subtotal)}>
          CHECKOUT
        </button>
      </div>
    );
  }
}

export default Checkout;

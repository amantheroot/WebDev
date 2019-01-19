import React, { Component } from "react";
import CartHeader from "./cartheader";
import CartItems from "./cartitems";
import SubTotal from "./subtotal";
import Checkout from "./checkout";

class Cart extends Component {
  state = {};
  render() {
    return (
      <div
        className={"cart " + (this.props.showCart ? "cartShow" : "cartHide")}
      >
        <CartHeader>{this.props.children}</CartHeader>
        <CartItems
          items={this.props.items}
          onItemDelete={this.props.onItemDelete}
        />
        <div className="subtotalcheckout">
          <SubTotal subtotal={this.props.subtotal} />
          <Checkout
            subtotal={this.props.subtotal}
            onCheckout={this.props.onCheckout}
          />
        </div>
      </div>
    );
  }
}

export default Cart;

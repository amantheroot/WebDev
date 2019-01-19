import React, { Component } from "react";
import CartButton from "./subcomponents/cartportion/cartbutton";
import Cart from "./subcomponents/cartportion/cart";
import CartIcon from "./subcomponents/cartportion/carticon";

class CartPortion extends Component {
  render() {
    let items = this.props.items;
    let numItemsatc = 0;
    let subtotal = 0;
    for (let index in items) {
      numItemsatc += items[index].quantity;
      subtotal += items[index].quantity * items[index].price;
    }
    return (
      <React.Fragment>
        <CartButton
          showCart={this.props.showCart}
          onCartClick={this.props.onCartClick}
        >
          <CartIcon numItemsatc={numItemsatc} />
        </CartButton>
        <Cart
          showCart={this.props.showCart}
          items={items}
          subtotal={subtotal}
          onItemDelete={this.props.onItemDelete}
          onCheckout={this.props.onCheckout}
        >
          <CartIcon numItemsatc={numItemsatc} />
        </Cart>
      </React.Fragment>
    );
  }
}

export default CartPortion;

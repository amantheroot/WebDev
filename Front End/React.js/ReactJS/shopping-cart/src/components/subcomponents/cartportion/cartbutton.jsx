import React, { Component } from "react";

class CartButton extends Component {
  state = {};
  render() {
    return (
      <div
        className={
          "cartportion__button " + (this.props.showCart ? "sc" : "dsc")
        }
        onClick={this.props.onCartClick}
      >
        {this.props.showCart ? "X" : this.props.children}
      </div>
    );
  }
}

export default CartButton;

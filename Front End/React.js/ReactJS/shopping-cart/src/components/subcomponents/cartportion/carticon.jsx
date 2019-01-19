import React, { Component } from "react";

class CartIcon extends Component {
  state = {};
  render() {
    return (
      <div className="carticon">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1yyBSIIaHlWWUMcp7FxdGXObR07urTPSa6qaUNYbkw4oG9OUM"
          alt="cart"
        />
        <span className="carticon__badge">{this.props.numItemsatc}</span>
      </div>
    );
  }
}

export default CartIcon;

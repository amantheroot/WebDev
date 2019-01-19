import React, { Component } from "react";

class CartItem extends Component {
  state = {};
  render() {
    let {
      id,
      imageurl,
      title,
      size,
      description,
      quantity,
      price
    } = this.props.item;
    return (
      <div className="cart__item">
        <img src={imageurl} alt="product" />
        <span
          className="fa fa-lg fa-close"
          onClick={() => this.props.onItemDelete(id)}
        />
        <div className="cart__item--desc">
          <p>
            <span>{title}</span>
            <br />
            {size} | {description}
            <br />
            Quantity: {quantity}
          </p>
          <span className="cart__item--price">₹ {price}</span>
        </div>
      </div>
    );
  }
}

export default CartItem;

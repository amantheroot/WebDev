import React, { Component } from "react";

class Item extends Component {
  state = {};
  render() {
    let { id, freeShipping, imageurl, title, price } = this.props.item;
    return (
      <div className="item">
        <div className="item__image--freeshipping">
          {freeShipping && (
            <span className="item__freeshipping">Free Shipping</span>
          )}
          <img className="item__image" src={imageurl} alt="product" />
        </div>
        <p className="item__title">{title}</p>
        <hr className="item__hr" />
        <p className="item__price">
          ₹ <strong>{price}</strong>
        </p>
        <button
          className="item__button"
          onClick={() => this.props.onatcClick(id)}
        >
          Add To Cart
        </button>
      </div>
    );
  }
}

export default Item;

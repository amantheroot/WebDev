import React, { Component } from "react";
import CartItem from "./cartitem";

class CartItems extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {this.props.items.length === 0 ? (
          <div className="cart__items--noitems">
            Add some product in the bag <br />
            <br /> :)
          </div>
        ) : (
          <div className="cart__items">
            {this.props.items.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onItemDelete={this.props.onItemDelete}
              />
            ))}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default CartItems;

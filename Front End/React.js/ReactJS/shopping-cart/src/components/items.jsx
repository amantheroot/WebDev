import React, { Component } from "react";
import Item from "./subcomponents/item";
import Sorting from "./sorting";

class Items extends Component {
  render() {
    let selectedSizes = this.props.selectedSizes;
    let items;
    if (selectedSizes.length === 0) {
      items = this.props.items;
    } else {
      items = this.props.items.filter(item =>
        selectedSizes.includes(item.size)
      );
    }
    return (
      <div className="items__container">
        <div className="items__header">
          <p className="psf">{items.length} Product(s) found.</p>
          <Sorting onSortSelect={this.props.onSortSelect} />
        </div>
        <div className="items">
          {items.map(item => (
            <Item
              key={item.id}
              item={item}
              onatcClick={this.props.onatcClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Items;

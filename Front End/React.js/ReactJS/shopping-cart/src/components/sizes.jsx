import React, { Component } from "react";

class Sizes extends Component {
  state = {};
  render() {
    return (
      <div className="sizes__container">
        <strong>Sizes: </strong>
        <div className="sizes">
          {this.props.sizes.map((size, index) => {
            return (
              <div
                key={index}
                className={
                  this.props.selectedSizes.includes(size)
                    ? "size selectedSize"
                    : "size"
                }
                onClick={() => this.props.onSizeSelect(index)}
              >
                {size}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Sizes;

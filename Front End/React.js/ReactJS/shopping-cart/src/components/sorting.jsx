import React, { Component } from "react";

class Sorting extends Component {
  state = {};
  render() {
    return (
      <div className="sorting">
        Order by
        <select onChange={e => this.props.onSortSelect(e)}>
          <option value="none">Select</option>
          <option value="lth">Lowest To Highest</option>
          <option value="htl">Highest To Lowest</option>
        </select>
      </div>
    );
  }
}

export default Sorting;

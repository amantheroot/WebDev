import React, { Component } from "react";

class Numbers extends Component {
  state = {
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  };
  render() {
    return (
      <React.Fragment>
        {this.state.numbers.map((num, index) => {
          if (num === 0) {
            return (
              <button
                className="number0"
                key={num}
                onClick={() => this.props.onNumPress(num)}
              >
                <div className="zero">{num}</div>
              </button>
            );
          } else {
            return (
              <button
                className={"number" + index}
                key={num}
                onClick={() => this.props.onNumPress(num)}
              >
                {num}
              </button>
            );
          }
        })}
      </React.Fragment>
    );
  }
}

export default Numbers;

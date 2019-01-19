import React, { Component } from "react";

class Operations extends Component {
  state = {
    operations: ["+", "−", "×", "÷"]
  };
  render() {
    let operation = this.props.operation;
    let typeOper = this.props.typeOper;
    return (
      <React.Fragment>
        {this.state.operations.map((oper, index) => {
          if (operation && typeOper === oper) {
            return (
              <button
                className={"oper" + index + " currentOper"}
                key={oper}
                onClick={() => this.props.onOperPress(oper)}
              >
                {oper}
              </button>
            );
          }
          return (
            <button
              className={"oper" + index}
              key={oper}
              onClick={() => this.props.onOperPress(oper)}
            >
              {oper}
            </button>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Operations;

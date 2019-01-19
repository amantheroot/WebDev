import React, { Component } from "react";
import NumberMods from "./numbermods";
import Operations from "./operations";
import Numbers from "./numbers";
import Decimal from "./decimal";
import Equals from "./equals";

class Calculator extends Component {
  state = {};
  render() {
    return (
      <div className="calculator">
        <NumberMods
          clear={this.props.clear}
          onNumModPress={this.props.onNumModPress}
        />
        <Operations
          operation={this.props.operation}
          typeOper={this.props.typeOper}
          onOperPress={this.props.onOperPress}
        />
        <Numbers onNumPress={this.props.onNumPress} />
        <Decimal onDecimalPress={this.props.onDecimalPress} />
        <Equals onEqualsPress={this.props.onEqualsPress} />
      </div>
    );
  }
}

export default Calculator;

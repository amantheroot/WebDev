import React, { Component } from "react";
import Display from "./components/display";
import Calculator from "./components/calculator";

class App extends Component {
  state = {
    number: 0,
    result: 0,
    clear: "AC",
    decimal: false,
    operation: false,
    alreadyResult: false,
    operContinue: false
  };
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
  }
  handleKeyPress = e => {
    switch (e.key) {
      case "1":
        this.handleNumPress(1);
        break;
      case "2":
        this.handleNumPress(2);
        break;
      case "3":
        this.handleNumPress(3);
        break;
      case "4":
        this.handleNumPress(4);
        break;
      case "5":
        this.handleNumPress(5);
        break;
      case "6":
        this.handleNumPress(6);
        break;
      case "7":
        this.handleNumPress(7);
        break;
      case "8":
        this.handleNumPress(8);
        break;
      case "9":
        this.handleNumPress(9);
        break;
      case "0":
        this.handleNumPress(0);
        break;
      case ".":
        this.handleDecimalPress();
        break;
      case "+":
        this.handleOperPress("+");
        break;
      case "-":
        this.handleOperPress("−");
        break;
      case "*":
        this.handleOperPress("×");
        break;
      case "/":
        this.handleOperPress("÷");
        break;
      case "Enter":
        this.handleEqualsPress();
        break;
      case "c":
        this.handleNumModPress("AC");
        break;
      case "s":
        this.handleNumModPress("+/-");
        break;
      case "p":
        this.handleNumModPress("%");
        break;
      default:
        break;
    }
  };
  handleNumPress = num => {
    if (this.state.operation) {
      this.setState({
        operation: false,
        number: num,
        result: num
      });
    } else if (this.state.alreadyResult) {
      this.setState({
        result: num,
        secondNum: num,
        alreadyResult: false
      });
    } else {
      let result = this.state.result;
      if (!this.state.decimal) {
        result *= 10;
        result += num;
      } else {
        result = result.toString() + num;
      }
      if (result !== this.state.result) {
        this.setState({ number: parseFloat(result), result, clear: "C" });
      }
    }
  };
  handleNumModPress = mod => {
    let { result, number } = this.state;
    switch (mod) {
      case "AC":
        result = 0;
        number = 0;
        this.setState({
          clear: "AC",
          decimal: false,
          operation: false,
          typeOper: "",
          secondNum: null
        });
        break;
      case "%":
        result = parseFloat(result);
        result /= 100;
        this.setState({ alreadyResult: true });
        break;
      case "+/-":
        if (typeof result !== "number") {
          result = "-" + result;
        } else {
          result *= -1;
        }
        break;
      default:
        break;
    }
    if (!this.state.secondNum) {
      this.setState({ result, number });
    } else {
      this.setState({ result, number, secondNum: parseFloat(result) });
    }
  };
  handleOperPress = oper => {
    if (!this.state.operContinue) {
      this.setState(state => ({
        operation: true,
        operContinue: true,
        decimal: false,
        typeOper: oper,
        secondNum: parseFloat(state.result)
      }));
    } else {
      let result = this.operate();
      this.setState({
        result,
        secondNum: result,
        alreadyResult: true,
        operation: true,
        decimal: false,
        typeOper: oper
      });
    }
  };
  operate = () => {
    let { number, secondNum, typeOper } = this.state;
    let result;
    switch (typeOper) {
      case "+":
        result = secondNum + number;
        break;
      case "−":
        result = secondNum - number;
        break;
      case "×":
        result = secondNum * number;
        break;
      case "÷":
        result = secondNum / number;
        break;
      default:
        break;
    }
    return result;
  };
  handleEqualsPress = () => {
    let result = this.operate();
    if (result !== undefined) {
      this.setState({
        result,
        secondNum: result,
        alreadyResult: true,
        decimal: false,
        operContinue: false
      });
    }
  };
  handleDecimalPress = () => {
    if (!this.state.decimal) {
      let result = this.state.result;
      if (this.state.operation) {
        result = "0.";
        this.setState({ decimal: true, number: 0, operation: false, result });
      } else if (this.state.alreadyResult) {
        result = "0.";
        this.setState({
          decimal: true,
          secondNum: 0,
          alreadyResult: false,
          result
        });
      } else if (result % 1 === 0) {
        result += ".";
        this.setState({ decimal: true, result });
      }
    }
  };
  render() {
    return (
      <div className="App">
        <Display number={this.state.result} />
        <Calculator
          clear={this.state.clear}
          onNumPress={this.handleNumPress}
          onNumModPress={this.handleNumModPress}
          onOperPress={this.handleOperPress}
          onEqualsPress={this.handleEqualsPress}
          onDecimalPress={this.handleDecimalPress}
          operation={this.state.operation}
          typeOper={this.state.typeOper}
        />
      </div>
    );
  }
}

export default App;

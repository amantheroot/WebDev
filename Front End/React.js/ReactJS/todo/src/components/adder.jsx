import React, { Component } from "react";

class Adder extends Component {
  componentDidMount() {
    this.refs.input.addEventListener("keypress", e => {
      if (e.keyCode === 13) {
        this.handleChange();
      }
    });
  }
  handleChange = () => {
    this.props.onChange(this.refs.input.value);
    this.refs.input.value = "";
  };
  render() {
    return (
      <div className="adder btn-group">
        <button
          onClick={this.handleChange}
          className="todo-button btn btn-md btn-primary"
        >
          +
        </button>
        <input
          className="todo-input form-control"
          type="text"
          placeholder="Add A Task"
          autoFocus
          ref="input"
        />
      </div>
    );
  }
}

export default Adder;

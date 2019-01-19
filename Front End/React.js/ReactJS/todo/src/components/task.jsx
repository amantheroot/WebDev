import React, { Component } from "react";

class Task extends Component {
  render() {
    return (
      <div className="task">
        <input
          type="checkbox"
          onChange={() => this.props.onDelete(this.props.index)}
        />
        <span className="m-2">{this.props.task}</span>
      </div>
    );
  }
}

export default Task;

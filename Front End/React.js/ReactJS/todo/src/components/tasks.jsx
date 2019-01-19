import React, { Component } from "react";
import Task from "./task";

class Tasks extends Component {
  render() {
    return (
      <div className="tasks">
        <ul className="list-group">
          {this.props.todos.map((todo, index) => (
            <li className="list-group-item">
              <Task
                key={todo.id}
                index={index}
                task={todo.task}
                onDelete={this.props.onDelete}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Tasks;

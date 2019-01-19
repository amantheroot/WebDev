import React, { Component } from "react";
import Adder from "./components/adder";
import Tasks from "./components/tasks";

class App extends Component {
  state = {
    todos: []
  };
  handleChange = value => {
    let shortid = require("shortid");
    let todos = JSON.parse(JSON.stringify(this.state.todos));
    let task = { id: shortid.generate(), task: value };
    todos.push(task);
    this.setState({ todos });
  };
  handleDelete = index => {
    let todos = JSON.parse(JSON.stringify(this.state.todos));
    todos.splice(index, 1);
    this.setState({ todos });
  };
  render() {
    return (
      <div className="App">
        <Adder onChange={this.handleChange} />
        <Tasks todos={this.state.todos} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;

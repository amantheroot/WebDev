import React, { Component } from "react";
import { observer } from "mobx-react";

const App = observer(
  class App extends Component {
    filter = e => {
      this.props.store.filter = e.target.value;
    };
    addTodo = e => {
      if (e.which === 13) {
        this.props.store.createTodo(e.target.value);
        e.target.value = "";
      }
    };
    toggleComplete = todo => {
      todo.completed = !todo.completed;
    };
    clearCompleted = () => {
      this.props.store.clearCompleted();
    };
    render() {
      let { filter, dummy, filteredTodos } = this.props.store;
      let todoLis = filteredTodos.map(todo => (
        <li key={todo.id}>
          <input
            type="checkbox"
            value={todo.completed}
            checked={todo.completed}
            onChange={() => this.toggleComplete(todo)}
          />
          {todo.value}
        </li>
      ));
      return (
        <div className="App">
          <h1>{filter}</h1>
          <input type="text" value={filter} onChange={this.filter} />
          <input type="text" onKeyPress={this.addTodo} />
          <h1>ToDos</h1>
          <ul>{todoLis}</ul>
          <button onClick={this.clearCompleted}>Clear Completed</button>
          <h1>{dummy}</h1>
        </div>
      );
    }
  }
);

export default App;

import React, { Component } from "react";
import Counter from "./components/counter";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 1000 },
      { id: 4, value: 0 }
    ]
  };
  handleIncrement = counter => {
    let counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = counter => {
    let counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({ counters });
  };
  handleDelete = counter => {
    let counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters.splice(index, 1);
    this.setState({ counters });
  };
  handleReset = () => {
    let counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand">
            Cart Items{" "}
            <span className="badge badge-secondary badge-pill">
              {this.state.counters.filter(c => c.value !== 0).length}
            </span>
          </a>
        </nav>
        <main className="container">
          <button onClick={this.handleReset} className="btn btn-md btn-primary">
            Reset
          </button>
          {this.state.counters.map(counter => (
            <Counter
              key={counter.id}
              counter={counter}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </main>
      </div>
    );
  }
}

export default App;

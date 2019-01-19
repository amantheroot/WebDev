import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Index from "./components/index";

import Clicker from "./components/clicker/app";
import Clock from "./components/clock/app";
import Pong from "./components/pong/app";
import Timer from "./components/timer/app";

import clickerstore from "./stores/clicker/store";
import clockstore from "./stores/clock/store";
import pongstore from "./stores/pong/store";
import timerstore from "./stores/timer/store";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Index} exact />
            <Route
              path="/clicker"
              render={() => <Clicker store={clickerstore} />}
            />
            <Route path="/clock" render={() => <Clock store={clockstore} />} />
            <Route path="/pong" render={() => <Pong store={pongstore} />} />
            <Route path="/timer" render={() => <Timer store={timerstore} />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

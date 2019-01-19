import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Index extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavLink to="/clicker">Clicker</NavLink>
        <br />
        <NavLink to="/clock">Clock</NavLink>
        <br />
        <NavLink to="/pong">Pong</NavLink>
        <br />
        <NavLink to="/timer">Timer</NavLink>
      </div>
    );
  }
}

export default Index;

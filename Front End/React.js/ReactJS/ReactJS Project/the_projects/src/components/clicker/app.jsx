import React, { Component } from "react";
import { observer } from "mobx-react";
import styled from "styled-components";

const Clicker = observer(
  class Clicker extends Component {
    increment = () => {
      this.props.store.count++;
    };
    decrement = () => {
      this.props.store.count--;
    };
    reset = () => {
      this.props.store.count = 0;
    };
    render() {
      let size = 500;
      const Container = styled.div`
        font-family: sans-serif;
        height: ${size + "px"};
        width: ${size + "px"};
        border: 1px solid black;
        border-radius: 20px;
        overflow: hidden;
        margin: auto;
        display: grid;
        grid-template-rows: ${(size / 3) * 2 + "px"} ${size / 3 + "px"};
        .display {
          background-color: #f9f9f9;
          color: #626262;
          font-size: ${size / 2.5 + "px"};
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .buttons {
          display: grid;
          grid-template-columns: ${size / 3 + "px"} ${size / 3 + "px"} ${size /
              3 +
              "px"};
          button {
            border: none;
            color: white;
            font-size: ${size / 10 + "px"};
            &:nth-child(1) {
              background-color: green;
              transition: background-color 0.1s;
              &:hover {
                background-color: darkgreen;
                cursor: pointer;
              }
            }
            &:nth-child(2) {
              color: #424242;
              background-color: gold;
              transition: background-color 0.1s;
              &:hover {
                background-color: darkgoldenrod;
                cursor: pointer;
              }
            }
            &:nth-child(3) {
              background-color: red;
              transition: background-color 0.1s;
              &:hover {
                background-color: darkred;
                cursor: pointer;
              }
            }
          }
        }
      `;
      return (
        <Container>
          <div className="display">
            <span>{this.props.store.count}</span>
          </div>
          <div className="buttons">
            <button onClick={this.increment}>+</button>
            <button onClick={this.reset}>Reset</button>
            <button onClick={this.decrement}>−</button>
          </div>
        </Container>
      );
    }
  }
);

export default Clicker;

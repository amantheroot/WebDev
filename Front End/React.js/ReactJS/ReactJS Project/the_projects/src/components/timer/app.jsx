import React, { Component } from "react";
import { observer } from "mobx-react";
import Container from "./style";
import "../../fontawesome/css/all.min.css";

const Timer = observer(
  class Timer extends Component {
    componentDidMount() {
      this.refs.seconds.innerHTML = this.props.store.seconds;
    }
    handleKeyPress = e => {
      let maxSeconds = 359999;
      if (!Number.isInteger(Number.parseInt(e.key)) && e.key !== "Backspace") {
        e.preventDefault();
      } else if (e.key === "Backspace" && e.target.innerHTML.length === 1) {
        e.target.innerHTML = "0";
        this.props.store.seconds = 0;
      } else if (e.target.innerHTML === "0") {
        e.target.innerHTML = "";
        this.props.store.seconds = Number.parseInt(e.key);
      } else if (Number.parseInt(e.target.innerHTML + e.key) > maxSeconds) {
        e.preventDefault();
      } else if (e.key === "Backspace") {
        let stringArray = [...e.target.innerHTML.split("")];
        stringArray.pop();
        this.props.store.seconds = Number.parseInt(stringArray.join(""));
      } else {
        this.props.store.seconds = Number.parseInt(e.target.innerHTML + e.key);
      }
    };
    play = () => {
      this.props.store.start = true;
      window.startTimer = setInterval(this.start, 10);
    };
    start = () => {
      if (this.props.store.milliseconds === 0) {
        if (this.props.store.seconds === 0) {
          this.stop();
        } else {
          this.props.store.milliseconds = 99;
          this.props.store.seconds--;
          this.refs.seconds.innerHTML = this.props.store.seconds;
        }
      } else {
        this.props.store.milliseconds--;
      }
    };
    stop = () => {
      clearInterval(window.startTimer);
      this.props.store.start = false;
    };
    reset = () => {
      this.stop();
      this.props.store.seconds = 0;
      this.props.store.milliseconds = 0;
      this.refs.seconds.innerHTML = 0;
    };
    render() {
      return (
        <Container seconds={this.props.store.seconds}>
          <div className="timer_outer">
            <div className="timer_inner">
              <div
                className={
                  !this.props.store.start ? "display" : "display start"
                }
              >
                <div className="time">{this.props.store.time}</div>
                <div
                  className="seconds"
                  onKeyDown={this.handleKeyPress}
                  contentEditable
                  ref="seconds"
                />
              </div>
              <div className="buttons">
                {!this.props.store.start ? (
                  <button
                    onClick={this.play}
                    className="play"
                    disabled={
                      this.props.store.seconds === 0 &&
                      this.props.store.milliseconds === 0
                    }
                  >
                    <i className="fas fa-play" />
                  </button>
                ) : (
                  <button onClick={this.stop} className="stop">
                    <i className="fas fa-square" />
                  </button>
                )}

                <button onClick={this.reset} className="reset">
                  <i className="fas fa-sync-alt" />
                </button>
              </div>
            </div>
          </div>
        </Container>
      );
    }
  }
);

export default Timer;

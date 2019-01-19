import React, { Component } from "react";
import { observer } from "mobx-react";
import styled from "styled-components";

const Clock = observer(
  class Clock extends Component {
    componentWillMount() {
      setInterval(() => {
        this.props.store.d = new Date();
      }, 1000);
    }
    toggleShowDate = () => {
      this.props.store.showDate = !this.props.store.showDate;
    };
    render() {
      const Container = styled.div`
        font-family: sans-serif;
        .app {
          display: flex;
          align-items: center;
          flex-flow: column;
          .top {
            margin: 20px 0;
            /* The switch - the box around the slider */
            .switch {
              position: relative;
              display: inline-block;
              width: 60px;
              height: 34px;
            }

            /* Hide default HTML checkbox */
            .switch input {
              opacity: 0;
              width: 0;
              height: 0;
            }

            /* The slider */
            .slider {
              position: absolute;
              cursor: pointer;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: #ccc;
              -webkit-transition: 0.4s;
              transition: 0.4s;
            }

            .slider:before {
              position: absolute;
              content: "";
              height: 26px;
              width: 26px;
              left: 4px;
              bottom: 4px;
              background-color: white;
              -webkit-transition: 0.4s;
              transition: 0.4s;
            }

            input:checked + .slider {
              background-color: #2196f3;
            }

            input:focus + .slider {
              box-shadow: 0 0 1px #2196f3;
            }

            input:checked + .slider:before {
              -webkit-transform: translateX(26px);
              -ms-transform: translateX(26px);
              transform: translateX(26px);
            }

            /* Rounded sliders */
            .slider.round {
              border-radius: 34px;
            }

            .slider.round:before {
              border-radius: 50%;
            }
            & > span {
              font-size: 2em;
              padding: 0 20px;
              float: right;
              height: 34px;
              display: flex;
              align-items: center;
            }
          }
          .clock {
            height: 250px;
            width: 250px;
            border-radius: 50%;
            background-color: navy;
            display: flex;
            align-items: center;
            justify-content: center;
            & > div {
              height: 200px;
              width: 200px;
              border-radius: 50%;
              background-color: blue;
              color: lightblue;
              display: flex;
              flex-flow: column;
              justify-content: center;
              text-align: center;
              .time {
                font-size: 3em;
                font-weight: bold;
              }
            }
          }
        }
      `;
      const d = this.props.store.d;

      const hour = d.getHours() < 10 ? `0${d.getHours()}` : `${d.getHours()}`;
      const minute =
        d.getMinutes() < 10 ? `0${d.getMinutes()}` : `${d.getMinutes()}`;
      const second =
        d.getSeconds() < 10 ? `0${d.getSeconds()}` : `${d.getSeconds()}`;
      const time = `${hour}:${minute}:${second}`;

      let weekday;
      switch (d.getDay()) {
        case 0:
          weekday = "Sun";
          break;
        case 1:
          weekday = "Mon";
          break;
        case 2:
          weekday = "Tue";
          break;
        case 3:
          weekday = "Wed";
          break;
        case 4:
          weekday = "Thu";
          break;
        case 5:
          weekday = "Fri";
          break;
        case 6:
          weekday = "Sat";
          break;
        default:
          throw console.error("Invalid WeekDay");
      }
      let day = d.getDate();
      let month;
      switch (d.getMonth()) {
        case 0:
          month = "January";
          break;
        case 1:
          month = "February";
          break;
        case 2:
          month = "March";
          break;
        case 3:
          month = "April";
          break;
        case 4:
          month = "May";
          break;
        case 5:
          month = "June";
          break;
        case 6:
          month = "July";
          break;
        case 7:
          month = "August";
          break;
        case 8:
          month = "September";
          break;
        case 9:
          month = "October";
          break;
        case 10:
          month = "November";
          break;
        case 11:
          month = "December";
          break;
        default:
          throw console.error("Invalid Month");
      }
      let year = d.getFullYear();
      const date = `${weekday} ${day} ${month} ${year}`;
      return (
        <Container>
          <div className="app">
            <div className="top">
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={this.toggleShowDate}
                  checked={this.props.store.showDate}
                />
                <span className="slider round" />
              </label>
              <span>Date</span>
            </div>
            <div className="clock">
              <div className="clock__inner">
                <div className="time">{time}</div>
                {this.props.store.showDate ? (
                  <div className="date">{date}</div>
                ) : null}
              </div>
            </div>
          </div>
        </Container>
      );
    }
  }
);

export default Clock;

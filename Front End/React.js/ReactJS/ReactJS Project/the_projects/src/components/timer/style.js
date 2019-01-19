import styled from "styled-components";

const Container = styled.div`
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .timer_outer {
    background-color: #e0e0e0;
    height: 300px;
    width: 300px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    .timer_inner {
      background-color: #f5f5f5;
      height: 275px;
      width: 275px;
      border-radius: 50%;
      display: grid;
      grid-template-rows: 200px 75px;
      overflow: hidden;
      .display {
        display: flex;
        flex-flow: column;
        justify-content: center;
        text-align: center;
        color: #38eeff;
        font-size: 1.2em;
        .seconds {
          padding: 30px 0 0 0;
          font-weight: bold;
          font-size: 2.7em;
          &:focus {
            outline: none;
          }
        }
      }
      .start {
        font-size: 3em;
        .time {
          margin-bottom: -60px;
          color: ${props => (props.seconds < 10 ? "red" : "#38eeff")};
        }
        .seconds {
          display: none;
        }
      }
      .buttons {
        display: grid;
        grid-template-columns: auto auto;
        & > button {
          border: none;
          transition: background-color 0.3s;
          &:hover {
            cursor: pointer;
          }
          &:focus {
            outline: none;
          }
          & > i {
            color: white;
            font-size: 3em;
            margin-top: -10px;
          }
        }
        .play {
          background-color: #3cb371;
          &:hover {
            background-color: #2e8b57;
          }
          & > i {
            margin-right: -60px;
          }
          &:disabled {
            background-color: #239f57;
            &:hover {
              cursor: default;
            }
          }
        }
        .stop {
          background-color: #424242;
          &:hover {
            background-color: #333333;
          }
          & > i {
            margin-right: -60px;
          }
        }
        .reset {
          background-color: #0080ff;
          &:hover {
            background-color: #0f52ba;
          }
          & > i {
            margin-left: -60px;
          }
        }
      }
    }
  }
`;
export default Container;

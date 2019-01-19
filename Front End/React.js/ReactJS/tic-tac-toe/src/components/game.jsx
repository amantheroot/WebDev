import React, { Component } from "react";
import Box from "./box";
import Button from "./button";

class Game extends Component {
  state = {
    boxes: [
      { id: 1, value: "", clicked: false },
      { id: 2, value: "", clicked: false },
      { id: 3, value: "", clicked: false },
      { id: 4, value: "", clicked: false },
      { id: 5, value: "", clicked: false },
      { id: 6, value: "", clicked: false },
      { id: 7, value: "", clicked: false },
      { id: 8, value: "", clicked: false },
      { id: 9, value: "", clicked: false }
    ],
    X_turn: true,
    X_pos: [],
    O_pos: [],
    asideText: "Next player: X",
    win_poses: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7]
    ]
  };
  componentWillMount() {
    this.setState({
      history: [
        {
          move: 0,
          boxes: JSON.parse(JSON.stringify(this.state.boxes)),
          X_turn: this.state.X_turn,
          X_pos: this.state.X_pos,
          O_pos: this.state.O_pos,
          asideText: this.state.asideText
        }
      ]
    });
  }
  handleClick = box => {
    if (!box.clicked) {
      let X_turn = this.state.X_turn;
      let boxes = JSON.parse(JSON.stringify(this.state.boxes));
      const index = boxes.filter(b => b.id === box.id)[0].id - 1;
      boxes[index].clicked = true;
      boxes[index].value = this.state.X_turn ? "X" : "O";

      let pos = box.id;
      let X_pos = [...this.state.X_pos];
      let O_pos = [...this.state.O_pos];
      if (X_turn) {
        X_pos.push(pos);
      } else {
        O_pos.push(pos);
      }

      let gameOver = false;
      if (X_turn) {
        gameOver = this.state.win_poses.some(v1 =>
          v1.every(v2 => X_pos.indexOf(v2) !== -1)
        );
      } else {
        gameOver = this.state.win_poses.some(v1 =>
          v1.every(v2 => O_pos.indexOf(v2) !== -1)
        );
      }

      let asideText = "Next player: ";
      asideText += !X_turn ? "X" : "O";

      if (gameOver) {
        let winner = X_turn ? "X" : "O";
        asideText = "Winner: " + winner;
        let boxesOver = boxes.map(box => {
          box.clicked = true;
          return box;
        });
        this.setState({ boxes: boxesOver, asideText });
      } else if (X_pos.length + O_pos.length === 9) {
        asideText = "Draw";
      }

      X_turn = !X_turn;

      let totalLength = X_pos.length + O_pos.length;
      let history = JSON.parse(JSON.stringify(this.state.history));
      history.splice(totalLength, history.length - totalLength);
      history.push({
        move: totalLength,
        boxes: boxes,
        X_turn: X_turn,
        X_pos: X_pos,
        O_pos: O_pos,
        asideText: asideText
      });
      if (gameOver) {
        this.setState({ X_turn, X_pos, O_pos, asideText, history });
      } else {
        this.setState({ boxes, X_turn, X_pos, O_pos, asideText, history });
      }
    }
  };
  handleBtnClick = hist => {
    let boxes = JSON.parse(JSON.stringify(hist.boxes));
    let X_turn = hist.X_turn;
    let X_pos = hist.X_pos;
    let O_pos = hist.O_pos;
    let asideText = hist.asideText;
    this.setState({ boxes, X_turn, X_pos, O_pos, asideText });
  };
  render() {
    return (
      <div className="container">
        <div className="game">
          {this.state.boxes.map(box => (
            <Box key={box.id} onClick={this.handleClick} box={box}>
              {box.value}
            </Box>
          ))}
        </div>
        <span className="aside">
          {this.state.asideText}
          <div className="game-history">
            <ul>
              {this.state.history.map(hist => (
                <li key={hist.move}>
                  <Button hist={hist} onBtnClick={this.handleBtnClick} />
                </li>
              ))}
            </ul>
          </div>
        </span>
        {/*  */}
      </div>
    );
  }
}

export default Game;

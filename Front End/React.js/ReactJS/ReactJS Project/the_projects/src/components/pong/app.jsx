import React, { Component } from "react";
import { observer } from "mobx-react";
import Container from "./styles/style";
import kd from "./keydrown";

const Pong = observer(
  class Pong extends Component {
    componentDidMount() {
      let width = this.props.store.width;

      this.refs.firstbar.style.left = 2 * width + "px";
      this.refs.secondbar.style.left = window.innerWidth - 3 * width + "px";

      this.refs.firstbar.style.top = window.innerHeight / 2 + "px";
      this.refs.secondbar.style.top = window.innerHeight / 2 + "px";

      this.refs.ball.style.top =
        window.innerHeight / 2 +
        ((Math.random() - 0.5) * window.innerHeight) / 2 +
        "px";
      this.refs.ball.style.left = window.innerWidth / 2 + "px";

      this.props.store.ballxvel *= Math.round(Math.random()) >= 0.5 ? 1 : -1;
      this.props.store.ballyvel =
        (Math.random() * 2 - 1) * this.props.store.ballxvel;

      if (this.props.store.keyboardmode) {
        kd.A.down(this.firstBarUp);
        kd.Z.down(this.firstBarDown);
        kd.K.down(this.secondBarUp);
        kd.M.down(this.secondBarDown);
        kd.run(function() {
          kd.tick();
        });
      } else {
        document.addEventListener("mousemove", this.handleMouseMove);
        kd.A.down(this.firstBarUp);
        kd.Z.down(this.firstBarDown);
        kd.run(function() {
          kd.tick();
        });
      }

      window.moveit = setInterval(this.moveball, 1000 / 60);
    }

    Reset = e => {
      if (e.key === " ") {
        document.removeEventListener("keyup", this.Reset);
        this.refs.gwt.style.opacity = 0;
        this.props.store.winner = false;
        this.props.store.firstscore = 0;
        this.props.store.secondscore = 0;
        this.refs.ball.style.top =
          window.innerHeight / 2 +
          ((Math.random() - 0.5) * window.innerHeight) / 2 +
          "px";
        this.refs.ball.style.left = window.innerWidth / 2 + "px";
        this.props.store.ballxvel *= Math.round(Math.random()) >= 0.5 ? 1 : -1;
        this.props.store.ballyvel =
          (Math.random() * 2 - 1) * this.props.store.ballxvel;
        window.moveit = setInterval(this.moveball, 1000 / 60);
      }
    };

    gameWon = () => {
      this.refs.gwt.style.left = this.props.store.winner === 1 ? "0%" : "50%";
      this.refs.gwt.style.opacity = 1;
      document.addEventListener("keyup", this.Reset);
    };

    ballReset = () => {
      this.refs.ball.style.top =
        window.innerHeight / 2 +
        ((Math.random() - 0.5) * window.innerHeight) / 2 +
        "px";
      this.refs.ball.style.left = window.innerWidth / 2 + "px";

      this.props.store.ballxvel *= -1;
      this.props.store.ballyvel =
        (Math.random() * 2 - 1) * this.props.store.ballxvel;

      window.moveit = setInterval(this.moveball, 1000 / 60);
    };

    moveball = () => {
      //
      let btop = Number.parseInt(this.refs.ball.style.top.split("px")[0]);
      let bleft = Number.parseInt(this.refs.ball.style.left.split("px")[0]);

      let bftop = Number.parseInt(this.refs.firstbar.style.top.split("px")[0]);
      let bstop = Number.parseInt(this.refs.secondbar.style.top.split("px")[0]);
      let bfleft = Number.parseInt(
        this.refs.firstbar.style.left.split("px")[0]
      );
      let bsleft = Number.parseInt(
        this.refs.secondbar.style.left.split("px")[0]
      );

      //
      let bxv = this.props.store.ballxvel;
      let byv = this.props.store.ballyvel;

      //
      let width = this.props.store.width / 2;
      let wh = window.innerHeight;
      let ww = window.innerWidth;

      //
      let bt = btop - width;
      let br = bleft + width;
      let bb = btop + width;
      let bl = bleft - width;

      let rd = ww - br;
      let dd = wh - bb;

      //
      let bft = bftop - 6 * width;
      let bfb = bftop + 6 * width;
      let bfr = bfleft + width;
      let bfl = bfleft - width;

      let bst = bstop - 6 * width;
      let bsb = bstop + 6 * width;
      let bsl = bsleft - width;
      let bsr = bsleft + width;

      let bbrd = bsl - br;
      let bbld = bl - bfr;

      let bstbd = bst - bb;
      let bsbtd = bt - bsb;
      let bsrld = bl - bsr;

      let bftbd = bft - bb;
      let bfbtd = bt - bfb;
      let bflrd = bfl - br;

      if (
        bt >= byv &&
        dd >= -byv &&
        bl + 2 * width >= -bxv &&
        rd + 2 * width >= bxv &&
        (bbrd >= bxv || bsbtd >= byv || bstbd >= -byv || bsrld >= -bxv) &&
        (bbld >= -bxv || bfbtd >= byv || bftbd >= -byv || bflrd >= bxv)
      ) {
        this.refs.ball.style.top = btop - byv + "px";
        this.refs.ball.style.left = bleft + bxv + "px";
      } else if (bt < byv) {
        this.refs.ball.style.top = width + "px";
        this.props.store.ballyvel *= -1;
      } else if (dd < -byv) {
        this.refs.ball.style.top = wh - width + "px";
        this.props.store.ballyvel *= -1;
      } else if (bl + 2 * width < -bxv) {
        this.refs.ball.style.left = -2 * width + "px";
        clearInterval(window.moveit);

        this.props.store.secondscore++;
        if (this.props.store.secondscore >= this.props.store.winningscore) {
          this.props.store.winner = 2;
          this.gameWon();
        } else {
          setTimeout(this.ballReset, 1000);
        }
      } else if (rd + 2 * width < bxv) {
        this.refs.ball.style.left = ww + 2 * width + "px";
        clearInterval(window.moveit);

        this.props.store.firstscore++;
        if (this.props.store.firstscore >= this.props.store.winningscore) {
          this.props.store.winner = 1;
          this.gameWon();
        } else {
          setTimeout(this.ballReset, 1000);
        }
      } else if (bbrd < bxv && bsbtd < byv && bstbd < -byv && bsrld < -bxv) {
        if (br <= bsl && bt >= bst && bb <= bsb) {
          this.refs.ball.style.left = bsl - width + "px";
        } else if (bl >= bsr && bt >= bst && bb <= bsb) {
          this.refs.ball.style.left = bsr + width + "px";
        } else if (bt >= bsb) {
          this.refs.ball.style.top = bsb + width + "px";
        } else if (bb <= bst) {
          this.refs.ball.style.top = bst - width + "px";
        }

        let diff = bstop - btop;
        this.props.store.ballxvel *= -1;
        this.props.store.ballyvel =
          (diff / (7 * width)) * -this.props.store.ballxvel;
      } else if (bbld < -bxv && bfbtd < byv && bftbd < -byv && bflrd < bxv) {
        if (bl >= bfr && bt >= bft && bb <= bfb) {
          this.refs.ball.style.left = bfr + width + "px";
        } else if (br >= bfl && bt >= bft && bb <= bfb) {
          this.refs.ball.style.left = bfl - width + "px";
        } else if (bt >= bfb) {
          this.refs.ball.style.top = bfb + width + "px";
        } else if (bb <= bft) {
          this.refs.ball.style.top = bft - width + "px";
        }

        let diff = bftop - btop;
        this.props.store.ballxvel *= -1;
        this.props.store.ballyvel =
          (diff / (7 * width)) * this.props.store.ballxvel;
      }
    };

    handleMouseMove = e => {
      let { Width } = this.GetVals();
      let upperDiff = Width * 3;
      let lowerDiff = window.innerHeight - Width * 3;

      if (e.clientY >= upperDiff && e.clientY <= lowerDiff) {
        this.refs.secondbar.style.top = e.clientY + "px";
      } else if (e.clientY < upperDiff) {
        this.refs.secondbar.style.top = upperDiff + "px";
      } else if (e.clientY > lowerDiff) {
        this.refs.secondbar.style.top = lowerDiff + "px";
      }
    };

    GetVals = () => {
      return {
        Width: this.props.store.width,
        vel: this.props.store.vel,
        firsttop: Number.parseInt(this.refs.firstbar.style.top.split("px")[0]),
        secondtop: Number.parseInt(this.refs.secondbar.style.top.split("px")[0])
      };
    };

    firstBarUp = () => {
      let { Width, vel, firsttop } = this.GetVals();
      let diff = firsttop - Width * 3;
      this.refs.firstbar.style.top = firsttop - (diff > 0 ? vel : diff) + "px";
    };
    firstBarDown = () => {
      let { Width, vel, firsttop } = this.GetVals();
      let diff = window.innerHeight - (firsttop + Width * 3);
      this.refs.firstbar.style.top =
        firsttop + (diff >= vel ? vel : diff) + "px";
    };
    secondBarUp = () => {
      let { Width, vel, secondtop } = this.GetVals();
      let diff = secondtop - Width * 3;
      this.refs.secondbar.style.top =
        secondtop - (diff > 0 ? vel : diff) + "px";
    };
    secondBarDown = () => {
      let { Width, vel, secondtop } = this.GetVals();
      let diff = window.innerHeight - (secondtop + Width * 3);
      this.refs.secondbar.style.top =
        secondtop + (diff >= vel ? vel : diff) + "px";
    };

    render() {
      return (
        <Container>
          <div className="game">
            <h1>
              <code>{this.props.store.firstscore}</code>
              <code>{this.props.store.secondscore}</code>
            </h1>
            <div ref="gwt" className="gamewontext">
              <code>
                <h1>WIN</h1>
                <p>
                  PLAY AGAIN <br /> (SPACEBAR)
                </p>
              </code>
            </div>
            <div className="middash" />
            <div className="bars" ref="firstbar" />
            <div className="bars" ref="secondbar" />
            <div className="ball" ref="ball" />
          </div>
        </Container>
      );
    }
  }
);

export default Pong;

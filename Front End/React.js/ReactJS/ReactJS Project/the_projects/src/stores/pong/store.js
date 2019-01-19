import { observable, decorate } from "mobx";

class PongStore {
  width = 20;
  get vel() {
    return (this.width * 3) / 4;
  }
  keyboardmode = true;
  ballxvel = 12;
  ballyvel = 0;
  firstscore = 0;
  secondscore = 0;
  winningscore = 10;
  winner = false;
}
decorate(PongStore, {
  keyboardmode: observable,
  ballxvel: observable,
  ballyvel: observable,
  firstscore: observable,
  secondscore: observable,
  gameover: observable
});

export default new PongStore();

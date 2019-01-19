import { observable, decorate, computed } from "mobx";

class TimerStore {
  seconds = 0;
  milliseconds = 0;
  start = false;
  get time() {
    let s = this.seconds;
    let hr = Math.floor(s / 60 / 60);
    let min = Math.floor((s - hr * 60 * 60) / 60);
    let sec = s - hr * 60 * 60 - min * 60;
    let ms = this.milliseconds;

    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    ms = ms < 10 ? "0" + ms : ms;

    return `${hr}:${min}:${sec}:${ms}`;
  }
}
decorate(TimerStore, {
  seconds: observable,
  milliseconds: observable,
  start: observable,
  time: computed
});

export default new TimerStore();

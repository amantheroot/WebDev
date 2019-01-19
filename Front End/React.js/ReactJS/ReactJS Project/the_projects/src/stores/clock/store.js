import { observable, decorate } from "mobx";

class ClockStore {
  d = new Date();
  showDate = true;
}
decorate(ClockStore, {
  d: observable,
  showDate: observable
});

export default new ClockStore();

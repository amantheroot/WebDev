import { observable, decorate } from "mobx";

class ClickerStore {
  count = 0;
}
decorate(ClickerStore, {
  count: observable
});

export default new ClickerStore();

<template>
  <div class="container">
    <div class="game">
      <!-- v-on:mouseover="toggleCellMOver(e,cell.id)" -->
      <div
        v-for="cell in cells"
        :key="cell.id"
        :class="[cell.alive ? 'cell alive' : 'cell dead']"
        v-on:click="toggleCell(cell.id)"
      ></div>
    </div>
    <div class="input_field">
      <div class="btn">
        <button v-if="!start" class="start" v-on:click="simStart(rate)">START</button>
        <button v-else class="stop" v-on:click="simStop">STOP</button>
        <button class="clear" v-on:click="clear">CLEAR</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TGOL",
  computed: {
    cells() {
      return this.$store.getters.cells;
    },
    size() {
      return this.$store.getters.size;
    },
    start() {
      return this.$store.getters.start;
    },
    rate() {
      return this.$store.getters.rate;
    }
  },
  methods: {
    toggleCell(cellId) {
      this.$store.dispatch({
        type: "toggleCell",
        cellId: cellId
      });
    },
    simStart(rate) {
      this.$store.dispatch({ type: "simStart", rate });
    },
    simStop() {
      this.$store.dispatch({ type: "simStop" });
    },
    clear() {
      this.$store.dispatch({ type: "clear" });
    }
  }
};
</script>

<style>
:root {
  --Num: 40;
}
.container {
  display: grid;
  grid-template-columns: auto auto;
}
.game {
  width: 100vh;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(var(--Num), auto);
  grid-template-rows: repeat(var(--Num), auto);
}
.cell {
  border: 1px solid #c4c4c4;
}
.alive {
  background-color: yellow;
}
.dead {
  background-color: gray;
}
.input_field {
  display: flex;
  align-items: center;
}
button {
  font-size: 2em;
  color: white;
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 20px;
}
button:hover {
  cursor: pointer;
}
.start {
  background-color: green;
}
.start:hover {
  background-color: darkgreen;
}
.stop {
  background-color: red;
}
.stop:hover {
  background-color: darkred;
}
.clear {
  display: block;
  margin: 50px 0;
  background-color: #424242;
}
.clear:hover {
  background-color: #222222;
}
@media only screen and (max-width: 800px) {
  .container {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  }
  .game {
    width: 100vw;
    height: 100vw;
  }
  .input_field {
    justify-content: center;
  }
  .btn {
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;
  }
  .clear {
    display: inline-block;
    margin: 0;
  }
}
</style>



import Vuex from "vuex";

let size = 40;

const createStore = () => {
  return new Vuex.Store({
    state: {
      size,
      cells: Array.apply(false, Array(size ** 2)).map((v, i) => {
        return { id: i, alive: false };
      }),
      start: false,
      rate: 60
    },
    getters: {
      cells(state) {
        return state.cells;
      },
      size(state) {
        return state.size;
      },
      start(state) {
        return state.start;
      },
      rate(state) {
        return state.rate;
      }
    },
    mutations: {
      toggleCell(state, { cellId }) {
        state.cells[cellId].alive = !state.cells[cellId].alive;
      },
      simStart(state) {
        state.start = true;
        let { size, cells } = state;
        let popcells = Array.apply(null, Array(cells.length)).map(() => 0);
        for (let cell of cells) {
          let notlast = (cell.id + 1) % size !== 0;
          let notfirst = (cell.id + 1) % size !== 1;
          let notlastrow = size ** 2 - (cell.id + 1) >= size;
          let notfirstrow = cell.id + 1 > size;

          let indexes = [];
          if (notlast) {
            indexes.push(cell.id + 1);
          }
          if (notfirst) {
            indexes.push(cell.id - 1);
          }
          if (notlastrow) {
            indexes.push(cell.id + size);
          }
          if (notfirstrow) {
            indexes.push(cell.id - size);
          }
          if (notlastrow && notlast) {
            indexes.push(cell.id + size + 1);
          }
          if (notlastrow && notfirst) {
            indexes.push(cell.id + size - 1);
          }
          if (notfirstrow && notlast) {
            indexes.push(cell.id - size + 1);
          }
          if (notfirstrow && notfirst) {
            indexes.push(cell.id - size - 1);
          }
          indexes.forEach(v => {
            if (cells[v]) {
              if (cells[v].alive) {
                popcells[cell.id] += 1;
              }
            }
          });
        }

        for (let cell of cells) {
          if (cells[cell.id].alive) {
            if (popcells[cell.id] !== 2 && popcells[cell.id] !== 3) {
              state.cells[cell.id].alive = false;
            }
          } else {
            if (popcells[cell.id] === 3) {
              state.cells[cell.id].alive = true;
            }
          }
        }
      },
      simStop(state) {
        state.start = false;
      },
      clear(state) {
        state.cells.forEach(cell => (state.cells[cell.id].alive = false));
      }
    },
    actions: {
      toggleCell({ commit }, cellId) {
        commit("toggleCell", cellId);
      },
      simStart({ commit }, { rate }) {
        window.simulation = setInterval(() => {
          commit("simStart");
        }, 1000 / rate);
      },
      simStop({ commit }) {
        clearInterval(simulation);
        commit("simStop");
      },
      clear({ commit }) {
        commit("clear");
      }
    }
  });
};

export default createStore;

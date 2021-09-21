import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex); //Indicate that vue must use Vuex;

// Howe to start and export a instance vuex
export default new Vuex.Store({
  //Using state
  state: {
    actualStep: 0,
    start: false,
  },
  mutations: {
    INCREASE_STEP(state) {
      state.actualStep++;
    },

    CHANGE_STATE_START(state) {
      state.start = !state.start;
      state.start ? (state.actualStep = 1) : (state.actualStep = 0);
      console.log(state.start);
    },
  },
});

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex); //Indicate that vue must use Vuex;

// Howe to start and export a instance vuex
export default new Vuex.Store({
  //Using state
  state: {
    actualStep: 1,
    start: false,
  },
  mutations: {
    increaseStep(state) {
      state.actualStep++;
    },

    changeStartBool(state) {
      state.start = !state.start;
    },
  },
});

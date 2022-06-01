import { createStore } from "vuex";

const state = {
  cardScreen: "home",
};

const getters = {
  cardScreen(state) {
    return state.cardScreen;
  },
};

const mutations = {
  CHANGE_SCREEN(state, screen) {
    console.log(state.cardScreen);
    if (state.cardScreen != screen) {
      state.cardScreen = screen;
      console.log(state.cardScreen);
      console.log(screen);
    }
  },
};

const actions = {
  triggerScreenChange(context, screen) {
    console.log("triggered action");
    context.commit("CHANGE_SCREEN", screen);
  },
};

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {},
});

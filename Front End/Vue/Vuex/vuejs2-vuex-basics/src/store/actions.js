export default {
  register({ commit }, userId) {
    setTimeout(() => {
      commit("register", userId);
    }, 1000);
  },
  unregister(context, payload) {
    setTimeout(() => {
      context.commit("unregister", payload);
    }, 2000);
  }
};

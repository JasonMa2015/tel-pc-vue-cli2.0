export default {
  state: {
    editInfo: false
  },
  mutations: {
    getEditInfo (state, value) {
      state.editInfo = value;
    }
  }
};

const state = {
  token: "",
};

const mutations = {
  SET_TOKEN(token) {
    state.token = token;
  },
};
const getters = {
  token: () => {
    return state.token;
  }
};

const actions = {
  setToken(token) {
    token.commit('SET_TOKEN');
  }
};

export default {
  state,
  mutations,
  getters,
  actions,
};

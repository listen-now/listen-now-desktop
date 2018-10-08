const state = {
  token: '',
};

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
};
const getters = {
  token: state => state.token,
};

const actions = {
  setToken(state, token) {
    state.commit('SET_TOKEN', token);
  },
};

export default {
  state,
  mutations,
  getters,
  actions,
};

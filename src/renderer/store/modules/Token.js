let state = {
  token: "",
};

let mutations = {
  SET_TOKEN(state,token) {
    state.token = token;
  },
};
let getters = {
  token: state => {
    return state.token;
  }
};

let actions = {
  setToken(state, token) {
    state.commit('SET_TOKEN',token);
  }
};

export default {
  state,
  mutations,
  getters,
  actions,
};

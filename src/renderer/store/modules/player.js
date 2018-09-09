let state = {
    token: "",
  };
  
  let mutations = {
    SET_TOKEN(state,token) {
      state.token = token;
    },
  };
  let getters = {
    token: () => {
      return state.token;
    }
  };
  
  let actions = {
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
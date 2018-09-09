import Axios from "axios"

let state = {
  title:'',//搜索内容
  searchResult:[],//搜索结果
  platform: '',//搜索平台
}

let mutations = {
  SET_TITLE(state, title) {
    state.title = title
  },
  SET_SEARCH_RESULT(state, result) {
    state.searchResult = result
  },
  SET_PLATFORM(state, platform) {
    state.platform = platform
  }
}

let getters = {
  getMusicList: (state) => {
    return state.searchResult
  },
  title:(state) => {
    return state.title
  }
}

let actions = {
  async search({state, commit}, {page, token}) {
    const platform = state.platform
    const title = state.title
    const { data } = await Axios.post('http://zlclclc.cn/search', {title, platform, page, token})
    const promise = new Promise(function(resolve, reject){
      if(data.code === 200) {//搜索成功
        resolve(data)
        commit('SET_SEARCH_RESULT', data.song.list) 
      } else {
        reject(data)
        commit('SET_SEARCH_RESULT', [])
      }
    })
    return promise
  }
}

export default {
  state,
  mutations,
  getters,
  actions,
}

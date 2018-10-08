import Axios from 'axios';
import qs from 'qs';

const state = {
  title: '', // 搜索内容
  searchResult: [], // 搜索结果
  platform: '', // 搜索平台
};

const mutations = {
  SET_TITLE(state, title) {
    state.title = title;
  },
  SET_SEARCH_RESULT(state, result) {
    state.searchResult = result;
  },
  SET_PLATFORM(state, platform) {
    state.platform = platform;
  },
};

const getters = {
  getMusicList: state => state.searchResult,
  title: state => state.title,
};

const actions = {
  async search({ state, commit }, { page, token }) {
    const platform = state.platform;
    const title = state.title;
    const { data } = await Axios.post('http://www.zlclclc.cn/search', { title, platform, page, token });
    let data2 = await Axios.post('http://www.zlclclc.cn/search', { title, platform, page: parseInt(page) + 1, token });
    data2 = data2.data;
    const promise = new Promise(((resolve, reject) => {
      if (data.code === 200 && data2.code === 200) { // 搜索成功
        resolve(data);
        commit('SET_SEARCH_RESULT', (() => {
          data.song.list = data.song.list.concat(data2.song.list);
          data.song.list = data.song.list.map((item) => {
            item.platform = platform;
            return item;
          });
          return data.song.list;
        })());
      } else if (data.code === 200) {
        data.song.list = data.song.list.map((item) => {
          item.platform = platform;
          return item;
        });
        return data.song.list;
      } else {
        reject(data);
        commit('SET_SEARCH_RESULT', []);
      }
      return data;
    }));
    return promise;
  },
};

export default {
  state,
  mutations,
  getters,
  actions,
};

import Api from '../../renderUtil/api';

let state = {
    playingMusic:{
      image_url:'',
      artists:'未知作者',
      music_name:'未知歌曲',
      play_url:'',
    },
    playingMusicIndex:'',
    musicList: [],
    progress:"",
    currentTime:0,
    playState:false,
    tempSongWaitingList:[], //  为了避免加载冲突问题
    tempSongList:[], //  要延迟加载的音乐，为了减轻服务器压力
  };
  
  let mutations = {
    SET_MUSICLIST(state, musicList) {
      state.musicList = musicList;
    },
    SET_PROGRESS(state, progress) {
      state.progress = progress;
    },
    SET_PLAYINGMUSIC(state, music) {
      console.log(`SET_MUSIC TO ----->`);
      console.log(music);
      state.playingMusic = music;
    },
    SET_PLAYINGMUSICINDEX(state, index) {
      state.playingMusicIndex = index;
    },
    SET_CURRENT_TIME(state, currentTime) {
      state.currentTime = currentTime;
    },
    SET_PLAYSTATE(state, playState) {
      state.playState = playState;
    },
    SET_TEMPSONGLIST(state, tempSongList) {
      state.tempSongList = tempSongList;
    },
    SET_TEMPSONGWAITINGLIST(state, tempSongWaitingList) {
      state.tempSongWaitingList = tempSongWaitingList;
    }
  };

  let getters = {
    getPlayingMusicList: () => {
      return state.musicList;
    },
    getProgress: () => {
      return state.progress;
    },
    getPlayingMusic: () => {
      return state.playingMusic;
    },
    getPlayingMusicIndex: () => {
      return state.playingMusicIndex;
    },
    getPlayState: () => {
      return state.playState;
    },
    getTempSongList: () => {
      return state.tempSongList;
    },
    getPlayingMusicLiric: () => {
      return state.playingMusic.lyric;
    }
  };
  
  let actions = {
    setPlayerState({musicList, progress, playingMusic, playingMusicIndex}) {
      commit('SET_MUSICLIST', musicList);
      commit('SET_PROGRESS', progress);
      commit('SET_PLAYINGMUSIC', playingMusic);
      commit('SET_PLAYINGMUSICINDEX', playingMusicIndex);
    },
    async setAlbum({state, commit},{album, playIndex}) {
      const sleep = time => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve();
          }, time);
        })
      };
      let index = playIndex;
      Api.setAuth(window.localStorage.getItem('token'));

      //目前歌单只有酷狗音乐，只对酷狗音乐做处理
      let song = await Api.api.getMusicById(album[playIndex].songId, Api.getCurrentPlatform('酷狗音乐'));
      commit('SET_MUSICLIST', [song]);
      commit('SET_TEMPSONGLIST', [song]);
      commit('SET_PLAYINGMUSIC', song);
      commit('SET_PLAYINGMUSICINDEX', 0);
      commit('SET_TEMPSONGWAITINGLIST', album);
      for (let i = 0; i < state.tempSongWaitingList.length; i++) {
        if (state.tempSongWaitingList[i].music_name !== album[i].music_name) {
          return;
        }
        let tempSong = await Api.api.getMusicById(state.tempSongWaitingList[i].songId, Api.getCurrentPlatform('酷狗音乐'));
        let tempAlbum = state.tempSongList;
        tempAlbum.push(tempSong);
        commit('SET_TEMPSONGLIST', tempAlbum);
        await sleep(20000);
      }
      commit('SET_MUSICLIST', state.tempSongList);
      commit('SET_PLAYINGMUSICINDEX', playIndex);
    }
  };
  
  export default {
    state,
    mutations,
    getters,
    actions,
  };
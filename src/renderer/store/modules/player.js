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
    currentLyric:"",  //  currentLyric,用来存放歌词播放对象
  };
  
  let mutations = {
    SET_MUSICLIST(state, musicList) {
      state.musicList = musicList;
    },
    SET_PROGRESS(state, progress) {
      state.progress = progress;
    },
    SET_PLAYINGMUSIC(state, music) {
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
    },
    SET_CURRENT_LYRIC(state, currentLyric) {
      state.currentLyric = currentLyric;
    },
    SET_CURRENT_LYRIC_LRC(state, lrc) {
      state.currentLyric.lrc = lrc;
    },
    SET_CURRENT_LYRIC_LINES(state, lines) {
      state.currentLyric.lines = lines;
    },
    SET_CURRENT_LYRIC_TIME(state, time) {
      state.currentLyric.seek(time);
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
    getCurrentTime: () => {
      return state.currentTime;
    },
    getPlayState: () => {
      return state.playState;
    },
    getTempSongList: () => {
      return state.tempSongList;
    },
    getPlayingMusicLiric: () => {
      return state.playingMusic.lyric;
    },
    getCurrentLyric: () => {
      return state.currentLyric;
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
    },
    setNewLyric ({state, commit}) {
      // setTimeout(() => {
      //   console.log(parseInt(state.currentTime));
      //   if (state.playState) {
      //     console.log('change time');
      //     state.currentLyric.play(parseInt(state.currentTime));
      //   } else {
      //     state.currentLyric.stop();
      //   }
        commit('SET_CURRENT_LYRIC_TIME', parseInt(state.currentTime));
      // }, 1000);
      // setInterval(() => {
      //   commit('SET_CURRENT_LYRIC_TIME', parseInt(state.currentTime));
      // }, 10000);
      commit('SET_CURRENT_LYRIC_LRC', parseInt(state.playingMusic.lyric));
      commit('SET_CURRENT_LYRIC_LINES', []);
      state.currentLyric._initLines();
      state.currentLyric.seek(parseInt(state.currentTime));
    }
  };
  
  export default {
    state,
    mutations,
    getters,
    actions,
  };
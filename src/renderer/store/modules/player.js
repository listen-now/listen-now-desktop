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
    tempSongList:[] //  要延迟加载的音乐，为了减轻服务器压力
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
    }
  };
  
  export default {
    state,
    mutations,
    getters,
    actions,
  };
<template>
    <div>
        <div class="playerButtons"
             style="padding:15px 10px 15px 10px">
            <left-sound width="80px"
                        style="float:left"
                        @volume="changeVolume"></left-sound>
            <left-button size="20"
                         type="alert"
                         color="rgb(240,242,123)"
                         style="float:left; margin-left:10px;"></left-button>
            <left-button size="20"
                         type="ios-heart-outline"
                         color="rgb(206, 92, 125)"
                         style="float:left; margin-left:10px;"></left-button>
            <el-tooltip content="Bottom center" placement="bottom" effect="light">
                <left-button size="20"
                             v-if="playMode === 'shuffle'"
                             @click="playMode = 'loop'"
                             type="ios-shuffle"
                             title="随机播放"
                             color="rgb(57, 150, 184)"
                             style="float:left; margin-left:10px;"></left-button>
            </el-tooltip>
            <el-tooltip content="Bottom center" placement="bottom" effect="light">
                <left-button size="20"
                             type="ios-loop"
                             v-if="playMode === 'loop'"
                             title="循环播放"
                             @click="playMode = 'senquential'"
                             color="rgb(57, 150, 184)"
                             style="float:left; margin-left:10px;"></left-button>
            </el-tooltip>
            <left-button size="20"
                         v-if="playMode === 'senquential'"
                         @click="playMode = 'singleTune'"
                         title="顺序播放"
                         type="ios-arrow-thin-right"
                         color="rgb(57, 150, 184)"
                         style="float:left; margin-left:10px;"></left-button>
            <left-button size="20"
                         v-if="playMode === 'singleTune'"
                         @click="playMode = 'shuffle'"
                         title ="单曲循环"
                         type="ios-circle-outline"
                         color="rgb(57, 150, 184)"
                         style="float:left; margin-left:10px;"></left-button>
            <left-button size="20" type="ios-list-outline" color="rgb(231, 136, 105)" style="float:left; margin-left:10px;"></left-button>
        </div>
        <div class="player" style="padding-left:10px;padding-right:10px;">
            <audio ref="audio" :src="playingMusic.play_url"></audio>
            <div class="playerCard">
                <el-carousel indicator-position="none"
                             arrow="never"
                             :autoplay="false"
                             type="card"
                             height="128px"
                             ref="slide"
                             @change="changeMusic"
                             >
                    <el-carousel-item v-for="item in musicList">
                        <img :src="item.image_url" style="width:100%;height: 100%;"/>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="circleControler">
                <i-circle :percent="percent"
                          :size='90'
                          trail-color="rgba(209, 221, 219, 0.5)"
                          stroke-color="white">
                    <div class="songMessage">
                        <div class="songName">
                            {{playingMusic.music_name}}
                        </div>
                        <div class="songAuthor">
                            {{playingMusic.artists}}
                        </div>
                    </div>
                    <div class="stopButton"  v-if="playState"  @click="pauseSwitch">
                        <Icon type="pause" color="white" size="28"></Icon>
                    </div>
                    <div class="playButton"  v-if="!playState"  @click="pauseSwitch">
                        <Icon type="play" color="white" size="28"></Icon>
                    </div>
                    <!-- 加载功能，目前这个功能有些问题 -->
                    <!-- <div class="loadingButton" v-if="loadingState">
                        <Spin>
                            <div>
                                <svg class="circular" viewBox="25 25 50 50">
                                    <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"></circle>
                                </svg>
                            </div>
                        </Spin>
                    </div> -->
                </i-circle>
            </div>
            <div class="preMusic" @click="preMusic" v-if="hasPreMusic">
                <Icon type="skip-backward" color="white"></Icon>
            </div>
            <div class="preMusicDisabled" v-if="!hasPreMusic">
                <Icon type="skip-backward" color="grey"></Icon>
            </div>
            <div class="nextMusic" @click="nextMusic" v-if="hasNextMusic">
                <Icon type="skip-forward" color="white"></Icon>
            </div>
            <div class="nextMusicDisabled" v-if="!hasNextMusic">
                <Icon type="skip-forward" color="grey"></Icon>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { setTimeout } from 'timers';
    import leftButton from './leftButton';
    import leftSound from './leftSound';
    export default {
      name: 'left-player',
      components: { leftSound, leftButton },
      computed: {
        ...mapGetters({
          playingMusic: 'getPlayingMusic',
          playingMusicIndex: 'getPlayingMusicIndex',
          token: 'token',
          musicList: 'getPlayingMusicList',
          playState: 'getPlayState',
          tempSongList: 'getTempSongList',
        }),
        hasPreMusic() {
          if (this.playMode === 'loop' || this.playMode === 'shuffle') return true;
          if (this.playingMusicIndex === 0) {
            return false;
          }
          return true;
        },
        hasNextMusic() {
          if (this.playMode === 'loop' || this.playMode === 'shuffle') {
            return true;
          }
          if (this.playingMusicIndex === this.musicList.length - 1) {
            return false;
          }
          return true;
        },
      },
      data() {
        return {
          // playState:false,
          percent: 0,
          firstSong: false,
          // playingMusicIndex:0,
          playMode: 'senquential', // shuffle 随机播放 senquential 顺序播放 singleTune 单曲循环 loop 循环播放
          loadingState: false, //  表征是否正在缓冲
          volume: 100,
        };
      },
      mounted() {
        setInterval(() => {
          try {
            const { paused } = this.$refs.audio;
            if (paused === true) {
              this.$store.commit('SET_PLAYSTATE', false);
            } else {
              this.$store.commit('SET_PLAYSTATE', true);
            }
            this.$store.commit('SET_CURRENT_TIME', this.getCurrentTime());
          } catch (e) {
            // console.log(e);
          }
        }, 100);
        setTimeout(() => {
          console.log(this.musicList);
          this.$store.commit('SET_PLAYINGMUSIC', this.musicList[0]);
        }, 500);
        this.$refs.audio.addEventListener('ended', this.autoPlay, false);
        this.$refs.audio.addEventListener('canplay', () => {
          if (!this.firstSong) {
            console.log('try to play');
            this.loadingState = false;
            this.$refs.audio.play();
          }
        }, false);
        this.$refs.audio.addEventListener('loadeddata', () => {}, false);
        this.$refs.audio.addEventListener('timeupdate', () => {
          const { readyState } = this.$refs.audio;
          if (readyState === 0) {
            this.setProgress(0);
            return;
          }
          const { duration, currentTime } = this.$refs.audio;
          const progress = currentTime / duration;
          this.setProgress(progress);
        }, false);
        this.$refs.audio.addEventListener('progress', () => {
          // 正在加载事件，当缓冲时触发
          this.loadingState = true;
        }, false);
        this.$store.commit('SET_PLAYSTATE', false);
      },
      watch: {
        volume(val) {
          this.$refs.audio.volume = val / 100;
        },
        playMode(val) {
          const that = this;
          if (val === 'singleTune') {
            that.$refs.audio.loop = true;
          } else {
            that.$refs.audio.loop = false;
          }
        },
        playState(val) {
          if (val) {
            this.setPlay();
          } else {
            this.setPause();
          }
        },
      },
      methods: {
        /**
             * 以下部分是对播放器的控制
             *
             * */

        pauseSwitch() {
          const paused = this.$refs.audio.paused;
          if (paused) {
            console.log('changed playstate to true');
            this.$refs.audio.play();
            this.$store.commit('SET_PLAYSTATE', true);
            // this.playState=true;
          } else {
            console.log('changed playstate to false');
            this.$refs.audio.pause();
            this.$store.commit('SET_PLAYSTATE', false);
            // this.playState=false
          }
        },

        setPlay() {
          this.$refs.audio.play();
          console.log('changed playstate to true');
          this.$store.commit('SET_PLAYSTATE', true);
        },

        setPause() {
          this.$refs.audio.pause();
          console.log('changed playstate to false');
          // this.$store.commit('SET_PLAYSTATE', false);
        },

        fastSeek(time) {
          this.$refs.audio.fastSeek(time);
        },

        canPlayType(type) {
          return this.$refs.audio.fastSeek(type);
        },

        setVolume(volume) {
          this.$refs.audio.volume = volume;
        },

        getVolume() {
          return this.$refs.audio.volume;
        },

        getNetworkState() {
          return this.$refs.audio.networkState;
        },

        getMuted() {
          return this.$refs.audio.muted;
        },

        getAutoplay() {
          return this.$refs.audio.autoplay;
        },

        getPlayingMusic() {
          return this.playingMusic;
        },

        getProcess() {
          return this.percent;
        },

        setMuted(muted) {
          this.$refs.audio.muted = muted;
        },

        getLoop() {
          return this.$refs.audio.loop;
        },

        setLoop(loop) {
          this.$refs.audio.loop = loop;
        },

        setAutoplay(autoplay) {
          this.$refs.autoplay = autoplay;
        },

        /**
                获取当前播放时间，在和歌词进行联动的时候需要
             */
        getCurrentTime() {
          return this.$refs.audio.currentTime;
        },

        /**
             *
             * @param progress
             */
        setProgress(progress) {
          this.percent = (progress * 100);
        },

        changeVolume(vol) {
          this.volume = vol;
        },

        /**
                每首歌曲播放完后自动播放下一首
             */
        autoPlay() {
          if (this.playMode === 'shuffle') { this.changeMusic(Math.floor(Math.random() * this.musicList.length)); } else if (this.playMode === 'senquential') {
            if (this.playingMusicIndex !== this.musicList.length - 1) { this.nextMusic(); }
          } else if (this.playMode === 'loop') {
            this.nextMusic();
          }
        },


        nextMusic() {
          this.firstSong = false;
          // this.playState = false;
          this.$store.commit('SET_PLAYSTATE', false);
          if (this.musicList.length > 1) {
            if (this.playingMusicIndex < this.musicList.length - 1) {
              console.log('set playing music in nextmusic');
              this.$store.commit('SET_PLAYINGMUSIC', this.musicList[this.playingMusicIndex + 1]);
              this.playingMusicIndex += 1;
              this.$store.commit('SET_PLAYINGMUSICINDEX', this.playingMusicIndex);
            } else {
              console.log('set playing music in nextmusic');
              this.$store.commit('SET_PLAYINGMUSIC', this.musicList[0]);
              this.$store.commit('SET_PLAYINGMUSICINDEX', 0);
              // this.playingMusicIndex = 0;
            }
          }
          this.$refs.slide.setActiveItem(this.playingMusicIndex);
          // this.playState = true;
          this.$store.commit('SET_PLAYSTATE', true);
        },

        preMusic() {
          this.firstSong = false;
          // this.playState = false;
          this.$store.commit('SET_PLAYSTATE', false);
          if (this.musicList.length > 1) {
            if (this.playingMusicIndex > 0) {
              this.$store.commit('SET_PLAYINGMUSIC', this.musicList[this.playingMusicIndex - 1]);
              this.playingMusicIndex -= 1;
              this.$store.commit('SET_PLAYINGMUSICINDEX', this.playingMusicIndex);
            } else {
              this.$store.commit('SET_PLAYINGMUSIC', this.musicList[this.musicList.length - 1]);
              this.$store.commit('SET_PLAYINGMUSICINDEX', this.musicList.length - 1);
              // this.playingMusicIndex = this.musicList.length - 1;
            }
          }
          this.$refs.slide.setActiveItem(this.playingMusicIndex);
          // this.playState = true;
          this.$store.commit('SET_PLAYSTATE', true);
        },

        changeMusic(idx) {
          // this.playState = false;
          this.$store.commit('SET_PLAYSTATE', false);
          console.log('set playing music in changemusic');
          this.$store.commit('SET_PLAYINGMUSIC', this.musicList[idx]);
          this.$store.commit('SET_PLAYINGMUSICINDEX', idx);
          // this.playingMusicIndex = idx;
          this.$refs.slide.setActiveItem(this.playingMusicIndex);
          // this.playState = true;
          this.$store.commit('SET_PLAYSTATE', true);
        },
      },
    };
</script>

<style scoped>
    .playerButtons {
        width: 220px;
        height: 50px;
    }
    .is-active {
        transform: translateX(36px) scale(1) !important;
        width: 128px;
    }
    .circleControler {
        z-index: 99;
        position: relative;
        top: -105px;
        left: 55px;
        width:90px;
        height:90px;
        background-color: rgba(71, 85, 96, 0.5);
        border-radius: 50%;
    }
    
    .circleControler:hover {
        /*cursor: pointer;*/
    }

    .songName {
        color:white;
        font-size:10px;
    }

    .songAuthor {
        color: #a0a0a0;
        font-size:6px;
        margin-top:4px;
    }
    .songMessage {
        position: relative;
        top:-7px;
    }

    .nextMusic,.preMusic {
        width:20px;
        height: 20px;
        background-color: rgba(71, 85, 96, 0.5);
        text-align: center;
        z-index: 20;
        border-radius: 50%;
        cursor: pointer;
        padding-top:1px;
    }

    .nextMusicDisabled,.preMusicDisabled {
        width:20px;
        height: 20px;
        background-color: rgba(71, 85, 96, 0.5);
        text-align: center;
        z-index: 20;
        border-radius: 50%;
        padding-top:1px;
    }

    .preMusicDisabled {
        position: relative;
        top:-160px;
        left:10px;
    }
    .nextMusicDisabled {
        position: relative;
        left:166px;
        top:-180px;
    }

    .nextMusic:hover,.preMusic:hover {
        transform: scale(1.3);
        transition: all .1s;
    }

    .preMusic {
        position: relative;
        top:-160px;
        left:10px;
    }
    .nextMusic {
        position: relative;
        left:166px;
        top:-180px;
    }
    .playButton,.stopButton{
        height: 30px;
        text-align: center;
        margin-bottom: -15px;
    }
    .playButton:hover,.stopButton:hover {
        transform: scale(1.3);
        transition: all .1s;
        cursor: pointer;
    }
</style>
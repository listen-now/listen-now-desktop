<template>
    <div class="lyric-player">
        <div id="lyric">
            <div class="playing-lyric-wrapper">
              <div class="playing-lyric">
                {{playingLyric}}
              </div>
            </div>
            <scroll class="middle-r" ref="lyriclist" :data="currentLyric && currentLyric.lines">
                <div class="lyric-wrapper">
                    <div v-if="currentLyric">
                        <p ref="lyricLine" 
                            class="text" 
                            v-for="(line, index) in currentLyric.lines" 
                            :key="line.key"
                            :class="{'current': currentLineNum === index}"
                        >{{line.txt}}</p>
                    </div>
                </div>
            </scroll>
        </div>
        <hr style="height:1px;width:90%;
            margin:auto;border-width:0;
            color:#cccccc;background-color:#aaaaaa" />
        <div id="optionsArea">
            <p style="float: left;color: #cccccc">正在播放</p>
            <div id="option" title="分享">
                <span class="iconfont icon-faxian2"></span>
            </div>
            <div id="option" title="调整">
                <span class="iconfont icon-yinfu1"></span>
            </div>
            <div id="option" title="评论">
                <span class="iconfont icon-xiaoxi2"></span>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Lyric from 'lyric-parser';
    import Scroll from '../../../scroll/scroll';
    export default {
      name: 'left-main-user',
      computed: {
        ...mapGetters({
          currentTime: 'getCurrentTime',
          lyric: 'getPlayingMusicLiric',
          playState: 'getPlayState',
          playingMusic: 'getPlayingMusic',
        }),
      },
      beforeDestroy() {
        console.log('destory');
        if (this.currentLyric) {
          clearInterval(this.currentLyric.timer);
        }
      },
      beforeMount() {
        const lyric = this.lyric;
        this.currentLyric = new Lyric(lyric, this.handleLyric);
      },
      mounted() {
        console.log(this.currentLyric);
        this.getLyric();
        console.log(this.currentLyric);
      },
      watch: {
        playState(value) {
          if (this.currentLyric) {
            if (value) {
              console.log(`设置时间为 -----> ${parseInt(this.currentTime, 0)}`);
              this.currentLyric.play(parseInt(this.currentTime, 0) * 1000);
            } else {
              this.currentLyric.stop();
              clearInterval(this.currentLyric.timer);
            }
          } else { this.getLyric(); }
        },
        playingMusic() {
          console.log('playingmusic changed');
          if (this.currentLyric) {
            clearInterval(this.currentLyric.timer);
          }
          this.getLyric();
        },
      },
      data() {
        return {
          currentLineNum: 0,
          playingLyric: '',
          currentLyric: null,
        };
      },
      components: {
        Scroll,
      },
      methods: {
        // 格式化时间
        format(interval) {
          interval |= 0;
          const minute = interval / 60 | 0;
          const second = this._pad(interval % 60);
          return `${minute}:${second}`;
        },
        _pad(num, n = 2) {
          let len = num.toString().length;
          while (len < n) {
            num = `0${num}`;
            len += 1;
          }
          return num;
        },
        getLyric() {
          const lyric = this.lyric;
          try {
            this.currentLyric = new Lyric(lyric, this.handleLyric);
            this.currentLyric.play(parseInt(this.currentTime, 0) * 1000);
            if (this.playState) {
              this.currentLyric.play(parseInt(this.currentTime, 0) * 1000);
            }
          } catch (e) {
            console.log(e);
            this.currentLineNum = 0;
            this.playingLyric = '';
          }
        },
        handleLyric({ lineNum, txt }) {
          this.currentLineNum = lineNum;
          if (lineNum > 5) {
            const lineEl = this.$refs.lyricLine[lineNum - 5];
            this.$refs.lyriclist.scrollToElement(lineEl, 1000);
          } else {
            this.$refs.lyriclist.scrollTo(0, 0, 1000);
          }
          this.playingLyric = txt;
        },
      },
    };
</script>

<style scoped>
    .iconfont {
        font-size: 16px;
    }
    
    #lyric {
        padding: 0 0 0 5px;
        font-size: 12px; /*文字大小*/
        color: #282828; /*文字颜色*/
        text-align: center;
        /*以下部分保证了垂直水平居中*/
        height: 212px;
        margin: auto;
    }
    #lyric:hover {
        text-shadow: 0px 0px 1px #282828;
        transition: background-color .5s ease-in-out;
    }

    #optionsArea {
        height: 50px;
        width: 90%;
        line-height: 50px;
        margin: auto;
    }

    #option {
        color: #282828;
        float: right;
        margin: 0px 5px;
    }
    #option:hover {
        text-shadow: 0px 0px 1px #282828;
        transition: background-color .5s ease-in-out;
    }
    .middle-r {
        display: inline-block;
        vertical-align: top;
        width: 100%;
        height: 90%;
        overflow: hidden;
    }

    .playing-lyric-wrapper {
        width: 80%;
        margin: 30px auto 0 auto;
        overflow: hidden;
        text-align: center;
    }
    .playing-lyric {
        height: 20px;
        line-height: 20px;
        font-size: font-size-medium;
        color: color-text-l;
    }

    .lyric-wrapper {
        width: 80%;
        margin: 0 auto;
        overflow: hidden;
        text-align: center;
    }
    .text {
        line-height: 32px;
        color: color-text-l;
        font-size: font-size-medium;
    }
    .current{
        color: color-text;
    }

    .lyric-player {
        position: relative;
        top:-30px;
    }

</style>
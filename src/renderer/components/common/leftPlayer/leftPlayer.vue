<template>
    <div>
        <div class="playerButtons" style="padding:15px 10px 15px 10px">
            <left-sound width="80px" style="float:left"></left-sound>
            <left-button size="20" type="alert" color="rgb(240,242,123)" style="float:left; margin-left:10px;"></left-button>
            <left-button size="20" type="ios-heart-outline" color="rgb(206, 92, 125)" style="float:left; margin-left:10px;"></left-button>
            <left-button size="20" type="ios-shuffle" color="rgb(57, 150, 184)" style="float:left; margin-left:10px;"></left-button>
            <left-button size="20" type="ios-list-outline" color="rgb(231, 136, 105)" style="float:left; margin-left:10px;"></left-button>
        </div>
        <div class="player">
            <audio ref="audio" src="http://221.204.220.70/mp3.9ku.com/m4a/409810.m4a"></audio>
            <div class="playerCard">
                <el-carousel indicator-position="none" arrow="never"  :autoplay="false" type="card" height="128px">
                    <el-carousel-item v-for="item in 6" :key="item">
                        <img src="../../../assets/Background_DEMO.jpg"/>
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
                            缘分惹的祸
                        </div>
                        <div class="songAuthor">
                            未知作者
                        </div>
                    </div>
                    <div class="stopButton"  v-if="playState"  @click="pauseSwitch">
                        <Icon type="pause" color="white" size="28"></Icon>
                    </div>
                    <div class="playButton"  v-if="!playState"  @click="pauseSwitch">
                        <Icon type="play" color="white" size="28"></Icon>
                    </div>
                </i-circle>
            </div>
            <div class="nextMusic">
                <Icon type="skip-backward" color="white"></Icon>
            </div>
            <div class="preMusic">
                <Icon type="skip-forward" color="white"></Icon>
            </div>
        </div>
    </div>
</template>

<script>
    import leftButton from '../leftButton/leftButton';
    import leftSound from '../leftSound/leftSound';
    export default {
        name: "left-player",
        components:{leftSound, leftButton},
        props:['musicList'],
        data(){
            return {
                playState:false,
                percent:0
            }
        },
        mounted () {
            setInterval(() => {
                let { readyState, paused } = this.$refs.audio;
                if (readyState === 0) {
                    this.setProgress(0);
                    return;
                } else {
                    let { duration, currentTime } = this.$refs.audio;
                    console.log(duration, currentTime);
                    let progress = currentTime / duration;
                    this.setProgress(progress);
                }
                console.log(readyState);
            }, 1000);
        },
        methods: {
            /**
             * 以下部分是对播放器的控制
             *
             **/

            pauseSwitch () {
                let paused = this.$refs.audio.paused;
                if (paused) {
                    this.$refs.audio.play();
                    console.log(this.playState);
                    this.playState=true;
                } else {
                    this.$refs.audio.pause();
                    this.playState=false
                }
            },
            fastSeek (time) {
                this.$refs.audio.fastSeek(time);
            },
            canPlayType (type) {
                return this.$refs.audio.fastSeek(type);
            },
            setVolume (volume) {
                this.$refs.audio.volume = volume;
            },
            getVolume () {
                return this.$refs.audio.volume;
            },
            getNetworkState () {
                return this.$refs.audio.networkState;
            },
            getMuted () {
                return this.$refs.audio.muted;
            },
            setMuted (muted) {
                this.$refs.audio.muted = muted;
            },
            getLoop () {
                return this.$refs.audio.loop;
            },
            setLoop (loop) {
                this.$refs.audio.loop = loop;
            },
            getAutoplay () {
                return this.$refs.autoplay;
            },
            setAutoplay (autoplay) {
                this.$refs.autoplay = autoplay;
            },

            /**
             *
             * @param progress
             */
            setProgress (progress) {
                this.percent = (progress*100);
            }
        }
    }
</script>

<style scoped>
    .playerButtons {
        width: 220px;
        height: 50px;
    }
    .is-active {
        transform: translateX(45.5px) scale(1) !important;
        width: 128px;
    }
    .circleControler {
        z-index: 99;
        position: relative;
        top: -105px;
        left: 65.5px;
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
    }

    .nextMusic:hover,.preMusic:hover {
        transform: scale(1.3);
        transition: all .1s;
    }

    .nextMusic {
        position: relative;
        top:-160px;
        left:15px;
    }
    .preMusic {
        position: relative;
        left:185px;
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
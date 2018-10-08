<template>
    <div class="music-list" :style="{height:height + 'px'}">
        <music-list-item isheader />
        <div class="music-list-items"
             :style="{height:height - 40 + 'px'}">
            <music-list-item v-for="(item, index) in musicList" 
                class="music-list__item"
                :item="item" 
                :index="index" 
                :key="item.id"
                :class="{'bottom-border': index === musicList.length - 1 && !(index % 2 === 0)}"
                @dblclick="playOrstop(item)"
            />
        </div>
    </div>
</template>

<script>
import musicListItem from '../musicListItem/musicListItem';
import Api from '../../../renderUtil/api.js';

export default {
  name: 'music-list',
  props: {
    height: {
      type: String,
      default: '377px',
    },
    musicList: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
    };
  },
  components: {
    musicListItem,
  },
  methods: {

    /**
         * 当显示的文字内容过长时滚动
         */
    scroll() {

    },
    // 双击播放或者停止
    playOrstop(item) {
      let id;
      Api.setAuth(window.localStorage.getItem('token'));
      // songId代表为album
      if (item.hasOwnProperty('songId')) {
        for (let i = 0; i < this.musicList.length; i += 1) {
          if (item === this.musicList[i]) {
            console.log(i);
            id = i;
          }
        }
        this.$store.dispatch('setAlbum', {
          album: this.musicList,
          playIndex: id,
        });
      } else {
        Api.api.getMusicById(item.id, item.platform).then((res) => {
          this.$store.commit('SET_PLAYINGMUSIC', res);
          this.$store.commit('SET_MUSICLIST', [res]);
          this.$store.commit('SET_PLAYSTATE', true);

          // 设置正在等待加载的音乐列表为空，以此来使之前进行的歌单加载停止
          this.$store.commit('SET_TEMPSONGWAITINGLIST', []);
        });
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.music-list {
    background-color:#fff;
    width: 910px;
    padding:0 10px;
    .music-list-items {
        // height:377px;
        overflow: auto;
        .bottom-border {
            border-bottom: 1px solid #eee;
        }
        // .music-list__item {
        //     &:hover {
        //         background-color : rgba(0, 0, 0, 0.5);
        //     }
        // }
    }
    .music-list-items::-webkit-scrollbar {
        display:none;
    }
}

</style>
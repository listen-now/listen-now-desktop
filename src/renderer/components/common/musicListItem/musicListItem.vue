<template>
<div class="music-wrap">
  <ul class="music-list-item" 
    :class="{
              'tbody':!isheader,
              'tbody-gray':!isheader && isEven
            }"
    @dblclick="playOrstop"
  >
    <template v-if="isheader">
      <li class="t-index">
        <span>
          序号
        </span>
      </li>
      <li class="t-song">
        <span>
          曲名
        </span>
      </li>
      <li>
        <span>
          歌手名
        </span>
      </li>
      <li>
        <span>
          专辑名
        </span>
      </li>
      <li>
        <span>
          来源
        </span>
      </li>
      <li>
        <span>
          歌曲时长 / 收听
        </span>
      </li>
    </template>
    <template v-else>
      <li class="t-index">
        <span>
          {{itemindex}}
        </span>
        <img src="../../../assets/dislike.png" alt="dislike" v-if="!item.islike" class="heart" @click="changeHeart">
        <img src="../../../assets/like.png" alt="like" v-else class="heart" @click="changeHeart">
      </li>
      <li class="t-song">
        <span>
          {{item.music_name | noData}}
        </span>
      </li>
      <li>
        <span>
          {{item.artists | noData}}
        </span>
      </li>
      <li>
        <span>
          {{item.album | noData}}
        </span>
      </li>
      <li>
        <span>
          {{item.platform | platform}}
        </span>
      </li>
      <li>
        <span>
          {{item.duration | noData}} / {{item.playamount | noData}}
        </span>
      </li>
    </template>
  </ul>
</div>
</template>

<script>
export default {
  name: 'musicListItem',
  props: {
    isheader: {
      type: Boolean,
      default: false,
    },
    item: {
      type: Object,
      default() {
        return {};
      },
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    itemindex() {
      return this.index < 10 ? `0${this.index}` : `${this.index}`;
    },
    isEven() {
      return !(this.index % 2);
    },
  },
  filters: {
    platform(value) {
      const platforms = {
        Neteasymusic: '网易云音乐',
        Xiamimusic: '虾米音乐',
        QQmusic: 'QQ音乐',
        Kugoumusic: '酷狗音乐',
        Kuwomusic: '酷我音乐',
        Baidumusic: '百度音乐',
        Migumusic: '咪咕音乐',
      };
      return platforms[value];
    },
    noData(value) {
      if (!value) {
        return '暂无数据';
      }
      return value;
    },
  },
  methods: {
    playOrstop() {
      if (!this.isheader) {
        this.$emit('dblclick');
      }
    },
    changeHeart() {
      // 修改喜好
    },
  },
};
</script>

<style lang="stylus" scoped>
.music-wrap {
  // &:hover{
  //     background-color:rgba(0, 0, 0, 0.5);
  // }
  .music-list-item {
    margin: 0;
    padding: 0;
    height: 30px;
    width: 890px;
    li {
      display:inline-block;
      cursor: default;
      list-style:none;
      width:100px;
      font-size:10px;
      line-height: 12px;
      // overflow: hidden;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      padding: 9px 0;
      text-align: left;
      span {
        display:inline-block;
        width:100%;
        height:12px;
        line-height:12px;
        font-size:10px;
        overflow: hidden;
        text-overflow: ellipsis;
        color:#A0A0A0;
      }
    }
    .t-index {
      position: relative;
      width:30px;
      padding-left:5px;
      span{
        border-left: none;
      }
      .heart {
        position:absolute;
        top: 10px;
        right:0;
        width:10px;
        cursor: pointer;
      }
    }
    .t-song {
      width:300px;
      span{
        border-left: none;
      }
    }
  }
  .tbody {
    border-left:1px solid #eee;
    border-right: 1px solid #eee;
    &:hover {
      background-color : rgba(100, 100, 100, 0.2);
      transition : background-color .2s;
    }
    li {
      span {
        color:#000;
        border-left:1px solid #AAAAAA;
      }
    }
  }
  .tbody-gray {
    &:hover {
      background-color : rgba(100, 100, 100, 0.2);
      transition : background-color .2s;
    }
    background-color: #eee;
  }
}
</style>



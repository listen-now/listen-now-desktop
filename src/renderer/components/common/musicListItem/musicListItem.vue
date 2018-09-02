<template>
<div class="music-wrap">
  <ul class="music-list-item" 
    :class="{
              'tbody':!isheader,
              'tbody-gray':!isheader && isEven
            }"
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
        <img src="../../../assets/dislike.png" alt="dislike" v-if="!item.islike" class="heart">
        <img src="../../../assets/like.png" alt="dislike" v-else class="heart">
      </li>
      <li class="t-song">
        <span>
          {{item.name}}
        </span>
      </li>
      <li>
        <span>
          {{item.singer}}
        </span>
      </li>
      <li>
        <span>
          {{item.album}}
        </span>
      </li>
      <li>
        <span>
          {{item.source}}
        </span>
      </li>
      <li>
        <span>
          {{item.duration}} / {{item.playamount}}
        </span>
      </li>
    </template>
  </ul>
</div>
</template>

<script>
export default {
  name:'musicListItem',
  props:{
    isheader:{
      type:Boolean,
      default:false
    },
    item:{
      type:Object,
      default: function() {
        return {}
      }
    },
    index:{
      type:Number,
      default:0
    }
  },
  computed:{
    itemindex () {
      return this.index < 10 ? '0'+this.index : ''+this.index
    },
    isEven () {
      return !(this.index % 2)
    }
  }
}
</script>

<style lang="stylus" scoped>
.music-wrap {
  .music-list-item {
    margin: 0;
    padding: 0;
    height: 30px;
    width: 890px;
    li {
      display:inline-block;
      list-style:none;
      width:100px;
      font-size:8px;
      line-height: 12px;
      overflow: hidden;
      padding: 9px 0;
      text-align: left;
      span {
        color:#A0A0A0;
        height:12px;
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
    li {
      span {
        color:#000;
        border-left:1px solid #AAAAAA;
      }
    }
  }
  .tbody-gray {
    background-color: #eee;
  }
}




</style>



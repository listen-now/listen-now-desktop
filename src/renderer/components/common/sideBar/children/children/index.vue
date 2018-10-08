<template>
    <div>
        <div id="leftMainOption" @click="goHome">
            <span class="iconfont icon-faxian1"></span>
            &nbsp;发现
        </div>
        <div id="leftMainOption" @click="goToSearch">
            <span class="iconfont icon-shoucang"></span>
            &nbsp;收藏
        </div>
        <div id="leftMainOption" @click="goToSearch">
            <span class="iconfont icon-gedan"></span>
            &nbsp;歌单
        </div>
        <div id="leftMainOption" @click="goToSearch">
            <span class="iconfont icon-lishi"></span>
            &nbsp;历史
        </div>
        <div id="leftMainOption" @click="goToSearch">
            <span class="iconfont icon-xiaoxi1"></span>
            &nbsp;消息
        </div>
        <div id="leftMainOption" @click="goToSearch">
            <span class="iconfont icon-kongjian"></span>
            &nbsp;空间
        </div>
        <div id="leftMainOption" @click="goToSearch">
            <span class="iconfont icon-shezhi"></span>
            &nbsp;设定
        </div>
    </div>
</template>

<script>
    export default {
      name: 'left-main-index',
      methods: {
        goToSearch() {
          this.$router.push('./search');
        },
        goHome() {
          this.$router.push('./pages/index');
        },
      },
    };
</script>

<style scoped>
    .iconfont {
        font-size: 16px;
    }
    
    #leftMainOption {
        padding: 0 0 0 10px;
        font-size: 16px; /*文字大小*/
        color: #282828; /*文字颜色*/
        letter-spacing: 0.5px;   /*字间距*/
        text-align: left;
        /*以下部分保证了垂直水平居中*/
        height: 36px;
        line-height: 36x;
        margin: auto;
    }
    #leftMainOption:hover {
        text-shadow: 0px 0px 1px #282828;
        transition: background-color .5s ease-in-out;
    }
</style>
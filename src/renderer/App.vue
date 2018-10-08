<template>
  <div id="app" width="1280px" height="720px">
    <div class="img-Background" :style="{backgroundImage: 'url(' + bg + ')' }"></div>
    <!-- <img src="mm1.jpg" id="blur" class="blur" /> -->
    <canvas id="canvas" width="256" height="191"></canvas>
    <div id="leftPart">
        <sideBar></sideBar>
    </div>
    <div id="rightPart">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import apiTool from './renderUtil/api';
  import tokenUtil from './renderUtil/token';
  import sideBar from './components/common/sideBar/sideBar';
  import Background from './assets/DEMO-2.jpg';

  export default {
    name: 'listen-now-desktop',
    components: {
      sideBar,
    },
    data() {
      return {
        bg: Background,
      };
    },
    async mounted() {
      const res = await tokenUtil.getToken();
      let { signature, token_message } = res.data;
      token_message = token_message.substring(2, token_message.length - 1);
      apiTool.setAuth(token_message);
      await tokenUtil.getExistToken(1, token_message);
      this.$store.dispatch('setToken', token_message);

      // 将token存储至localStroage
      window.localStorage.setItem('token', token_message);
      this.$store.commit('SET_MUSICLIST', this.musicList);
    },
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

<style>
    /* CSS */
    *{
        -webkit-font-smoothing:subpixel-antialiased; /*全局抗锯齿*/
        font-family: Helvetica, Tahoma, Arial, STXihei, "华文细黑", "Microsoft YaHei", "微软雅黑", SimSun, "宋体", Heiti, "黑体", sans-serif;

         /* 禁止文字被鼠标选中  */
        moz-user-select: -moz-none; 
        -moz-user-select: none; 
        -o-user-select:none; 
        -khtml-user-select:none; 
        -webkit-user-select:none; 
        -ms-user-select:none; 
        user-select:none;
    }

    #leftPart {
        width: 320px;
        height: 720px;
        margin: 0;
        padding: 50px;
        position:absolute;
        left:0px;
        top:0px;
    }
    #rightPart {
        width: 960px;
        height: 720px;
        margin: 0;
        padding: 50px 0px 50px 0px;
        /* 顺序：上 右 下 左 */
        position:absolute;
        left:320px;
        top:0px;
    }

    .img-Background {
        filter: blur(32px);
        /* 让整个div固定在屏幕的最上方和最左方 */
        position:fixed;
        top: -10%;
        left: -10%;
        /* 让整个div跟屏幕实现一模一样的大小，从而达到全屏效果 */
        width:120%;
        height:120%;
        /* 实现让屏幕宽度在1000px以内时，div的大小保持不变，
        也就是说在这种情况下，缩放屏幕宽度时，图片不要缩放
        （只有在1000px以内才有效）。 */
        min-width: 1000px;
        /* 让整个div在HTML页面中各个层级的下方，
        写-10是为了确保在最底部 */
        z-index:-100;
        zoom: 1;
        background-color: #fff;
        /* 背景不要重复 */
        background-repeat: no-repeat;
        /* 让图片随屏幕大小同步缩放，但是有部分可能会被裁切，不过不至于会露白 */
        background-size: cover;
        -webkit-background-size: cover; /* 兼容chrome */
        -o-background-size: cover; /* 兼容opera */
        /* 图片的位置，居中，靠左对齐 */
        background-position: center 0;
    }
    

</style>

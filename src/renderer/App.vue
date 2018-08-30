<template>
  <div id="app" width="1280px" height="720px">
    <div class="img-Background" :style="{backgroundImage: 'url(' + bg + ')' }"></div>
    <div id="mainBody">
      <div id="leftPart"> 
          <div id="leftLogo">
              <left-logo></left-logo>
          </div>
              <div id="leftSearch">
              <left-search></left-search></div>
              <div id="leftMain">
                <left-main></left-main></div>
              <div id="leftButton" style="padding:15px 10px 15px 10px">
              </div>
              <div id="leftMiniPlay">
                  <left-player :music-list="musicList"></left-player>
              </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import apiTool from './renderUtil/api';
  import tokenUtil from './renderUtil/token';
  import errMesage from './renderUtil/errorMessage';
  import leftLogo from './components/common/leftLogo/leftLogo';
  import leftSearch from './components/common/leftSearch/leftSearch';
  import leftMain from './components/common/leftMain/leftMain';
  import leftSound from './components/common/leftSound/leftSound';
  import leftButton from './components/common/leftButton/leftButton';
  import leftPlayer from './components/common/leftPlayer/leftPlayer';
  import Background from './assets/DEMO-2.jpg';
  import $ from 'jquery';
  export default {
    name: 'listen-now-desktop',
    components:{
                leftLogo, leftSearch, leftMain, leftPlayer, leftButton, leftSound, 
    },
    data() {
            return { bg: Background, musicList: [
                    {
                        artists:"周传雄",
                        image_url:"http://p1.music.126.net/Y91B_GXc5d9t-0X0Uu_7xw==/109951163063096750.jpg",
                        lyric:"[00:00.00] 作曲 : 周传雄↵[00:01.00] 作词 : 陈信荣↵[00:27.147]过完整个夏天↵[00:34.400]忧伤并没有好一些↵[00:40.189]开车行驶在公路无际无边↵[00:46.990]有离开自己的感觉↵[00:50.890]↵[00:54.290]唱不完一首歌↵[00:58.318]疲倦还剩下黑眼圈↵[01:04.308]感情的世界伤害在所难免↵[01:10.388]黄昏再美终要黑夜↵[01:15.598]依然记得从你口中说出再见坚决如铁↵[01:22.400]昏暗中有种烈日灼身的错觉↵[01:29.790]黄昏的地平线↵[01:31.778]划出一句离别↵[01:35.397]爱情进入永夜↵[01:39.778]↵[01:43.080]依然记得从你眼中滑落的泪伤心欲绝↵[01:48.088]混乱中有种热泪烧伤的错觉↵[01:53.588]黄昏的地平线↵[01:56.358]割断幸福喜悦↵[01:59.368]相爱已经幻灭↵[02:11.088]↵[02:19.377]唱不完一首歌↵[02:24.577]疲倦还剩下黑眼圈↵[02:30.890]感情的世界伤害在所难免↵[02:36.735]黄昏再美终要黑夜↵[02:41.556]↵[02:43.956]依然记得从你口中说出再见坚决如铁↵[02:50.145]昏暗中有种烈日灼身的错觉↵[02:54.887]黄昏的地平线↵[02:58.026]划出一句离别↵[03:01.289]爱情进入永夜↵[03:07.970]↵[03:08.065]依然记得从你眼中滑落的泪伤心欲绝↵[03:13.669]混乱中有种热泪烧伤的错觉↵[03:19.535]黄昏的地平线↵[03:22.595]割断幸福喜悦↵[03:25.765]相爱已经幻灭↵[03:46.076]↵[03:57.076]依然记得从你口中说出再见坚决如铁↵[04:03.095]昏暗中有种烈日灼身的错觉↵[04:09.377]黄昏的地平线↵[04:12.487]划出一句离别↵[04:14.756]爱情进入永夜↵[04:20.588]↵[04:21.318]依然记得从你眼中滑落的泪伤心欲绝↵[04:28.317]混乱中有种热泪烧伤的错觉↵[04:34.890]黄昏的地平线↵[04:36.597]割断幸福喜悦↵[04:40.789]相爱已经幻灭↵[04:54.789]↵",
                        music_id:190072,
                        music_name:"黄昏",
                        play_url:"http://music.163.com/song/media/outer/url?id=190072.mp3",
                        tlyric:null
                    },
                    {
                        artists:"周传雄",
                        music_id:189602,
                        music_name:"青花",
                        play_url:"http://music.163.com/song/media/outer/url?id=189602.mp3",
                    },
                    {
                        artists:"周传雄",
                        image_url:"http://p1.music.126.net/Y91B_GXc5d9t-0X0Uu_7xw==/109951163063096750.jpg",
                        lyric:"[00:00.00] 作曲 : 周传雄↵[00:01.00] 作词 : 陈信荣↵[00:27.147]过完整个夏天↵[00:34.400]忧伤并没有好一些↵[00:40.189]开车行驶在公路无际无边↵[00:46.990]有离开自己的感觉↵[00:50.890]↵[00:54.290]唱不完一首歌↵[00:58.318]疲倦还剩下黑眼圈↵[01:04.308]感情的世界伤害在所难免↵[01:10.388]黄昏再美终要黑夜↵[01:15.598]依然记得从你口中说出再见坚决如铁↵[01:22.400]昏暗中有种烈日灼身的错觉↵[01:29.790]黄昏的地平线↵[01:31.778]划出一句离别↵[01:35.397]爱情进入永夜↵[01:39.778]↵[01:43.080]依然记得从你眼中滑落的泪伤心欲绝↵[01:48.088]混乱中有种热泪烧伤的错觉↵[01:53.588]黄昏的地平线↵[01:56.358]割断幸福喜悦↵[01:59.368]相爱已经幻灭↵[02:11.088]↵[02:19.377]唱不完一首歌↵[02:24.577]疲倦还剩下黑眼圈↵[02:30.890]感情的世界伤害在所难免↵[02:36.735]黄昏再美终要黑夜↵[02:41.556]↵[02:43.956]依然记得从你口中说出再见坚决如铁↵[02:50.145]昏暗中有种烈日灼身的错觉↵[02:54.887]黄昏的地平线↵[02:58.026]划出一句离别↵[03:01.289]爱情进入永夜↵[03:07.970]↵[03:08.065]依然记得从你眼中滑落的泪伤心欲绝↵[03:13.669]混乱中有种热泪烧伤的错觉↵[03:19.535]黄昏的地平线↵[03:22.595]割断幸福喜悦↵[03:25.765]相爱已经幻灭↵[03:46.076]↵[03:57.076]依然记得从你口中说出再见坚决如铁↵[04:03.095]昏暗中有种烈日灼身的错觉↵[04:09.377]黄昏的地平线↵[04:12.487]划出一句离别↵[04:14.756]爱情进入永夜↵[04:20.588]↵[04:21.318]依然记得从你眼中滑落的泪伤心欲绝↵[04:28.317]混乱中有种热泪烧伤的错觉↵[04:34.890]黄昏的地平线↵[04:36.597]割断幸福喜悦↵[04:40.789]相爱已经幻灭↵[04:54.789]↵",
                        music_id:190071,
                        music_name:"黄昏",
                        play_url:"http://music.163.com/song/media/outer/url?id=190072.mp3",
                        tlyric:null
                    }
                ]}
    },
    mounted(){
        tokenUtil.getToken()
            .then(res => {
                let {signature, token_message} = res.data;
                token_message = token_message.substring(2, token_message.length - 1);
                apiTool.setAuth(token_message);
                tokenUtil.getExistToken(1, token_message).then(res => console.log(res));
                this.$store.dispatch('setToken', token_message);

                //将token存储至localStroage
                window.localStorage.setItem('token', token_message);
                return token_message;
            }).then(async () => {
              let resMusic = await apiTool.api.search("周传雄", apiTool.platform("网易云音乐"));
            }).catch(err => {
                console.log(err);
            });
    }
  };
</script>

<style>
    /* CSS */
    *{
      -webkit-font-smoothing:subpixel-antialiased;
      /*全局抗锯齿*/
      font-family: Helvetica, Tahoma, Arial, STXihei, "华文细黑", "Microsoft YaHei", "微软雅黑", SimSun, "宋体", Heiti, "黑体", sans-serif;
    }  
    #mainBody {
          margin: 50px;
          width: 1180px;
          height: 620px;
    }
      #leftPart {
        width: 220px;
        height: 620px;
        margin-right: 50px;
        float: left;
    }
    #leftLogo {
        width: 220px;
        height: 50px;
        float: left;
    }
    #leftSearch {
        width: 220px;
        height: 50px;
        float: left;
    }
    #leftMain {
        width: 220px;
        height: 342px;
        float: left;
    }
    #leftMiniPlay {
        width: 220px;
        height: 178px;
        float: left;
        overflow: hidden;
    }
</style>

<template>
    <transition name="fade">
        <div id="wrapper">
            <div id="indexPage">
                <div id="rightSlides">
                    <right-slides></right-slides>
                </div>
                <div id="rightFunctions">
                    <button-list title="Trending">
                        <button-list-item text="日推" backgroundColor="#f4f45e" type="android-calendar"></button-list-item>
                        <button-list-item text="电台" backgroundColor="rgb(50, 234, 137)" type="radio-waves"></button-list-item>
                        <button-list-item text="歌手" backgroundColor="rgb(249, 98, 130)" type="person"></button-list-item>
                        <button-list-item text="单曲" backgroundColor="rgb(20, 155, 195)" type="music-note" class="singleMusic"></button-list-item>
                        <button-list-item text="专辑" backgroundColor="rgb(252, 125, 87)" type="disc" class="albumLogo"></button-list-item>
                        <button-list-item text="更多" backgroundColor="rgb(36, 34, 45)" type="more"></button-list-item>
                    </button-list>
                </div>
                <div id="rightSongList">
                    <album-list title="最近受欢迎的歌单">
                        <album-list-item  v-for="album in albumList" 
                                        backgroundColor="#999999" 
                                        type="album" 
                                        :album="album"
                                        ></album-list-item>
                    </album-list>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import apiTool from '../../renderUtil/api';
    import tokenUtil from '../../renderUtil/token';
    import cardButton from '../../components/common/cardButton/cardButton';
    import buttonListItem from './buttonListItem';
    import buttonList from './buttonList';
    import albumListItem from './albumListItem';
    import albumList from './albumList';
    import rightSlides from '../../components/common/rightSlides/rightSlides';

    export default {
      name: 'index-page',
      components: { cardButton,
        buttonListItem,
        buttonList,
        albumListItem,
        albumList,
        rightSlides },
      data() {
        return {
          albumList: [],
        };
      },
      async beforeMount() {
        const token = window.localStorage.getItem('token');
        //  获取token，并且验证token是否已经获取到，如果未获取到，则再次尝试获取

        if (!token) {
          const res = await tokenUtil.getToken();
          let { signature, token_message } = res.data;
          token_message = token_message.substring(2, token_message.length - 1);
          apiTool.setAuth(token_message);
          await tokenUtil.getExistToken(1, token_message);
          this.$store.dispatch('setToken', token_message);

          // 将token存储至localStroage
          window.localStorage.setItem('token', token_message);
          const topSong = await apiTool.api.getTopSongList();
          this.albumList = topSong.itemlist;
        } else {
          apiTool.setAuth(window.localStorage.getItem('token'));
          const topSong = await apiTool.api.getTopSongList();
          this.albumList = topSong.itemlist;
        }
      },
      methods: {

      },
    };
</script>

<style lang="stylus">
    .singleMusic i{
        position: relative;
        left:-1px;
    }
    .albumLogo i {
        position: relative;
        left:-0.5px;
        top:0.5px;
    }
    
    #indexPage {
        width: 910px;
        height: 620px;
        float: left;
        box-shadow: 0px 3px 6px 1px rgba(0,0,0,0.1);    /*投影效果*/
        border:0px; /*边框*/
        background-color: rgba(253,253,253,0.95);
        padding: 25px;
    }
    #rightSlides {
        width: 860px;
        height: 223px;
        float: left;
    }
    #rightFunctions {
        margin-top: 25px;
        height: 322px;
        width: 182px;
        float: left;
    }
    #rightSongList {
        margin-top: 25px;
        margin-left: 20px;
        height: 347px;
        float: left;
    }
</style>

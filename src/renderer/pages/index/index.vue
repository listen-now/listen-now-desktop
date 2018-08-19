<template>
    <div id="wrapper" width="1280px" height="720px">
        <div class="img-Background" :style="{backgroundImage: 'url(' + bg + ')' }"></div>
        <div id="mainBody">
            <div id="leftPart">
                <div id="leftLogo">
                    <left-logo></left-logo></div>
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
            <div id="rightPart">
                <div id="rightSlides">
                    <!-- <card-button type="ios-paperplane" size="30" color="green" v-on:click-button="test()" text="1234"></card-button> -->
                    <right-slides></right-slides>
                </div>
                <div id="rightFunctions">
                    <button-list title="Trending">
                        <button-list-item text="日推" backgroundColor="#f4f45e" type="android-calendar">
                        </button-list-item>
                        <button-list-item text="电台" backgroundColor="rgb(50, 234, 137)" type="radio-waves">
                        </button-list-item>
                        <button-list-item text="歌手" backgroundColor="rgb(249, 98, 130)" type="person">
                        </button-list-item>
                        <button-list-item text="单曲" backgroundColor="rgb(20, 155, 195)" type="music-note" class="singleMusic">
                        </button-list-item>
                        <button-list-item text="专辑" backgroundColor="rgb(252, 125, 87)" type="disc" class="albumLogo">
                        </button-list-item>
                        <button-list-item text="更多" backgroundColor="rgb(36, 34, 45)" type="more">
                        </button-list-item>
                    </button-list>
                </div>
                <div id="rightSongList">
                    <album-list title="最近受欢迎的歌单">
                        <album-list-item backgroundColor="#999999" type="album"></album-list-item>
                        <album-list-item backgroundColor="#999999" type="album"></album-list-item>
                        <album-list-item backgroundColor="#999999" type="album"></album-list-item>
                        <album-list-item backgroundColor="#999999" type="album"></album-list-item>
                        <album-list-item backgroundColor="#999999" type="album"></album-list-item>
                        <album-list-item backgroundColor="#999999" type="album"></album-list-item>
                        <album-list-item backgroundColor="#999999" type="album"></album-list-item>
                        <album-list-item backgroundColor="#999999" type="album"></album-list-item>
                        <album-list-item backgroundColor="#999999" type="album"></album-list-item>
                        <album-list-item backgroundColor="#999999" type="album"></album-list-item>
                        <album-list-item backgroundColor="#999999" type="album"></album-list-item>
                        <album-list-item backgroundColor="#999999" type="album"></album-list-item>
                        <album-list-item backgroundColor="#999999" type="album"></album-list-item>
                        <album-list-item backgroundColor="#999999" type="album"></album-list-item>
                        <album-list-item backgroundColor="#999999" type="album"></album-list-item>
                        <album-list-item backgroundColor="#999999" type="album"></album-list-item>
                        <album-list-item backgroundColor="#999999" type="album"></album-list-item>
                        <album-list-item backgroundColor="#999999" type="album"></album-list-item>
                        <album-list-item backgroundColor="#999999" type="album"></album-list-item>
                        <album-list-item backgroundColor="#999999" type="album"></album-list-item>
                        <album-list-item backgroundColor="#999999" type="album"></album-list-item>
                    </album-list>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ApiTool from '../../renderUtil/api';
    import Background from '../../assets/DEMO-2.jpg';
    import leftLogo from '../../components/common/leftLogo/leftLogo';
    import leftSearch from '../../components/common/leftSearch/leftSearch';
    import leftMain from '../../components/common/leftMain/leftMain';
    import leftSound from '../../components/common/leftSound/leftSound';
    import leftButton from '../../components/common/leftButton/leftButton';
    import cardButton from '../../components/common/cardButton/cardButton';
    import buttonListItem from './buttonListItem';
    import buttonList from './buttonList';
    import albumListItem from './albumListItem';
    import albumList from './albumList';
    import leftPlayer from '../../components/common/leftPlayer/leftPlayer';
    import rightSlides from '../../components/common/rightSlides/rightSlides';

    export default {
        name: 'index-page',
        components: {   cardButton, buttonListItem, buttonList,
                        leftButton, leftSound, albumListItem, albumList,
                        leftLogo, leftSearch, leftMain,
                        rightSlides, leftPlayer },
        data() {
            return { bg: Background, musicList: [
                    {
                        artists
                            :
                            "周传雄",
                        image_url
                            :
                            "http://p1.music.126.net/Y91B_GXc5d9t-0X0Uu_7xw==/109951163063096750.jpg",
                        lyric
                            :
                            "[00:00.00] 作曲 : 周传雄↵[00:01.00] 作词 : 陈信荣↵[00:27.147]过完整个夏天↵[00:34.400]忧伤并没有好一些↵[00:40.189]开车行驶在公路无际无边↵[00:46.990]有离开自己的感觉↵[00:50.890]↵[00:54.290]唱不完一首歌↵[00:58.318]疲倦还剩下黑眼圈↵[01:04.308]感情的世界伤害在所难免↵[01:10.388]黄昏再美终要黑夜↵[01:15.598]依然记得从你口中说出再见坚决如铁↵[01:22.400]昏暗中有种烈日灼身的错觉↵[01:29.790]黄昏的地平线↵[01:31.778]划出一句离别↵[01:35.397]爱情进入永夜↵[01:39.778]↵[01:43.080]依然记得从你眼中滑落的泪伤心欲绝↵[01:48.088]混乱中有种热泪烧伤的错觉↵[01:53.588]黄昏的地平线↵[01:56.358]割断幸福喜悦↵[01:59.368]相爱已经幻灭↵[02:11.088]↵[02:19.377]唱不完一首歌↵[02:24.577]疲倦还剩下黑眼圈↵[02:30.890]感情的世界伤害在所难免↵[02:36.735]黄昏再美终要黑夜↵[02:41.556]↵[02:43.956]依然记得从你口中说出再见坚决如铁↵[02:50.145]昏暗中有种烈日灼身的错觉↵[02:54.887]黄昏的地平线↵[02:58.026]划出一句离别↵[03:01.289]爱情进入永夜↵[03:07.970]↵[03:08.065]依然记得从你眼中滑落的泪伤心欲绝↵[03:13.669]混乱中有种热泪烧伤的错觉↵[03:19.535]黄昏的地平线↵[03:22.595]割断幸福喜悦↵[03:25.765]相爱已经幻灭↵[03:46.076]↵[03:57.076]依然记得从你口中说出再见坚决如铁↵[04:03.095]昏暗中有种烈日灼身的错觉↵[04:09.377]黄昏的地平线↵[04:12.487]划出一句离别↵[04:14.756]爱情进入永夜↵[04:20.588]↵[04:21.318]依然记得从你眼中滑落的泪伤心欲绝↵[04:28.317]混乱中有种热泪烧伤的错觉↵[04:34.890]黄昏的地平线↵[04:36.597]割断幸福喜悦↵[04:40.789]相爱已经幻灭↵[04:54.789]↵",
                        music_id
                            :
                            190072,
                        music_name
                            :
                            "黄昏",
                        play_url
                            :
                            "http://music.163.com/song/media/outer/url?id=190072.mp3",
                        tlyric
                            :
                            null
                    },
                    {
                        artists
                            :
                            "周传雄",
                        music_id
                            :
                            189602,
                        music_name
                            :
                            "青花",
                        play_url
                            :
                            "http://music.163.com/song/media/outer/url?id=189602.mp3",
                    },
                    {
                        artists
                            :
                            "周传雄",
                        image_url
                            :
                            "http://p1.music.126.net/Y91B_GXc5d9t-0X0Uu_7xw==/109951163063096750.jpg",
                        lyric
                            :
                            "[00:00.00] 作曲 : 周传雄↵[00:01.00] 作词 : 陈信荣↵[00:27.147]过完整个夏天↵[00:34.400]忧伤并没有好一些↵[00:40.189]开车行驶在公路无际无边↵[00:46.990]有离开自己的感觉↵[00:50.890]↵[00:54.290]唱不完一首歌↵[00:58.318]疲倦还剩下黑眼圈↵[01:04.308]感情的世界伤害在所难免↵[01:10.388]黄昏再美终要黑夜↵[01:15.598]依然记得从你口中说出再见坚决如铁↵[01:22.400]昏暗中有种烈日灼身的错觉↵[01:29.790]黄昏的地平线↵[01:31.778]划出一句离别↵[01:35.397]爱情进入永夜↵[01:39.778]↵[01:43.080]依然记得从你眼中滑落的泪伤心欲绝↵[01:48.088]混乱中有种热泪烧伤的错觉↵[01:53.588]黄昏的地平线↵[01:56.358]割断幸福喜悦↵[01:59.368]相爱已经幻灭↵[02:11.088]↵[02:19.377]唱不完一首歌↵[02:24.577]疲倦还剩下黑眼圈↵[02:30.890]感情的世界伤害在所难免↵[02:36.735]黄昏再美终要黑夜↵[02:41.556]↵[02:43.956]依然记得从你口中说出再见坚决如铁↵[02:50.145]昏暗中有种烈日灼身的错觉↵[02:54.887]黄昏的地平线↵[02:58.026]划出一句离别↵[03:01.289]爱情进入永夜↵[03:07.970]↵[03:08.065]依然记得从你眼中滑落的泪伤心欲绝↵[03:13.669]混乱中有种热泪烧伤的错觉↵[03:19.535]黄昏的地平线↵[03:22.595]割断幸福喜悦↵[03:25.765]相爱已经幻灭↵[03:46.076]↵[03:57.076]依然记得从你口中说出再见坚决如铁↵[04:03.095]昏暗中有种烈日灼身的错觉↵[04:09.377]黄昏的地平线↵[04:12.487]划出一句离别↵[04:14.756]爱情进入永夜↵[04:20.588]↵[04:21.318]依然记得从你眼中滑落的泪伤心欲绝↵[04:28.317]混乱中有种热泪烧伤的错觉↵[04:34.890]黄昏的地平线↵[04:36.597]割断幸福喜悦↵[04:40.789]相爱已经幻灭↵[04:54.789]↵",
                        music_id
                            :
                            190072,
                        music_name
                            :
                            "黄昏",
                        play_url
                            :
                            "http://music.163.com/song/media/outer/url?id=190072.mp3",
                        tlyric
                            :
                            null
                    }
                ]}
        },
        beforeMount () {

        },
        methods: { },
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
    @import url(//fonts.googleapis.com/earlyaccess/notosanscjksc.css); /*外部导入字体*/
    * {
        font-family: "Noto Sans CJK sc";    /*CSS3加入的自定义字体，全局生效*/
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
    #rightPart {
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

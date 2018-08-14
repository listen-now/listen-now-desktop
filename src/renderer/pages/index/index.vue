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
                <div id="leftButton">
                    <left-sound width="100px" style="float:left"></left-sound>
                    <left-button size="30" type="alert" color="rgb(240,242,123)" style="float:left; margin-left:5px;"></left-button>
                    <left-button size="30" type="ios-heart-outline" color="rgb(206, 92, 125)" style="float:left; margin-left:5px;"></left-button>
                    <left-button size="30" type="ios-shuffle" color="rgb(57, 150, 184)" style="float:left; margin-left:5px;"></left-button>
                    <left-button size="30" type="ios-list-outline" color="rgb(231, 136, 105)" style="float:left; margin-left:5px;"></left-button>
                </div>
                <div id="leftMiniPlay"></div>
            </div>
            <div id="rightPart">
                <div id="rightMain">
                    <div id="rightSlides">
                        <card-button type="ios-paperplane" size="30" color="green" v-on:click-button="test()" text="1234">
                        </card-button>
                    </div>
                    <div id="rightFunctions">
                        <button-list title="Trending">
                            <button-list-item text="每日推荐" backgroundColor="#f4f45e" type="android-calendar">
                            </button-list-item>
                            <button-list-item text="私人电台" backgroundColor="rgb(50, 234, 137)" type="radio-waves">
                            </button-list-item>
                            <button-list-item text="歌手" backgroundColor="rgb(249, 98, 130)" type="person">
                            </button-list-item>
                            <button-list-item text="单曲" backgroundColor="rgb(20, 155, 195)" type="music-note" class="singleMusic">
                            </button-list-item>
                            <button-list-item text="专辑" backgroundColor="rgb(252, 125, 87)" type="disc" class="albumLogo">
                            </button-list-item>
                            <button-list-item text="更多..." backgroundColor="rgb(36, 34, 45)" type="more">
                            </button-list-item>
                        </button-list>
                    </div>
                    <div id="rightSongList">
                        <album-list title="最近受欢迎的歌单"></album-list>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Background from '../../assets/Background_DEMO.jpg';
    import leftLogo from '../../components/common/leftLogo/leftLogo';
    import leftSearch from '../../components/common/leftSearch/leftSearch';
    import leftMain from '../../components/common/leftMain/leftMain';
    import leftSound from '../../components/common/leftSound/leftSound';
    import leftButton from '../../components/common/leftButton/leftButton';
    import cardButton from '../../components/common/cardButton/cardButton';
    import buttonListItem from './buttonListItem';
    import buttonList from './buttonList';
    import albumList from './albumList';

    export default {
        name: 'index-page',
        components: {   cardButton, buttonListItem, buttonList, 
                        leftButton, leftSound, albumList, 
                        leftLogo, leftSearch, leftMain, },
        data() {
            return { bg: Background, }
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
        /* 让整个div固定在屏幕的最上方和最左方 */
        position:fixed;
        top: 0;
        left: 0;
        /* 让整个div跟屏幕实现一模一样的大小，从而达到全屏效果 */
        width:100%;
        height:100%;
        /* 实现让屏幕宽度在1000px以内时，div的大小保持不变，
        也就是说在这种情况下，缩放屏幕宽度时，图片不要缩放
        （只有在1000px以内才有效）。 */
        min-width: 1000px;
        /* 让整个div在HTML页面中各个层级的下方，
        写-10是为了确保在最底部 */
        z-index:-10;
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
    #mainBody {
        margin: 50px;
    }
    #leftPart {
        width: 220px;
        height: 100%;
        margin-right: 50px;
        float: left;
    }
    #rightPart {
        width: 910px;
        height: 100%;
        float: left;
    }
    #leftLogo {
        height: 50px;
    }
    #leftSearch {
        height: 50px;
    }
    #leftMain {
        height: 342px;
    }
    #leftButton {
        height: 50px;
    }
    #leftMiniPlay {
        height: 128px;
    }
    #rightMain {
        margin: 25px;
    }
    #rightSlides {
        height: 223px;
    }
    #rightFunctions {
        margin-top: 25px;
        height: 322px;
        width: 182px;
    }
    #rightSongList {
        margin-top: 25px;
        margin-left: 45px;
        height: 322px;
    }
</style>

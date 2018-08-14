<template>
    <div id="wrapper" width="1280px" height="720px">
        <div style="margin:50px">
            <div id="leftPart">
                <left-logo height="200px"></left-logo>
                <left-sound width="100px" style="float:left"></left-sound>
                <left-button size="30" type="alert" color="rgb(240,242,123)" style="float:left; margin-left:5px;"></left-button>
                <left-button size="30" type="ios-heart-outline" color="rgb(206, 92, 125)" style="float:left; margin-left:5px;"></left-button>
                <left-button size="30" type="ios-shuffle" color="rgb(57, 150, 184)" style="float:left; margin-left:5px;"></left-button>
                <left-button size="30" type="ios-list-outline" color="rgb(231, 136, 105)" style="float:left; margin-left:5px;"></left-button>
            </div>
            <div id="rightPart">
                <card-button type="ios-paperplane" size="30" color="green" v-on:click-button="test()" text="1234">
                </card-button>
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
                <album-list title="最近受欢迎的歌单">

                </album-list>
            </div>
        </div>
    </div>
</template>

<script>
    import leftLogo from '../../components/common/leftLogo/leftLogo';
    import cardButton from '../../components/common/cardButton/cardButton';
    import leftButton from '../../components/common/leftButton/leftButton';
    import buttonListItem from './buttonListItem';
    import buttonList from './buttonList';
    import leftSound from '../../components/common/leftSound/leftSound';
    import albumList from './albumList';

    export default {
        name: 'index-page',
        components: { cardButton, buttonListItem, buttonList, leftButton, leftSound, albumList, leftLogo},
        data() {
          return {

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
    #leftPart {
        width: 220px;
        height: 100%;
        float: left;
        text-align:center;
    }
    #rightPart {
        width: 910px;
        height: 100%;
        float: left;
        text-align:left;
    }
</style>

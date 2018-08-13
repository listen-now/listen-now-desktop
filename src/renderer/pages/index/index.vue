<template>
    <div id="wrapper">
        <card-button type="ios-paperplane" size="30" color="green" v-on:click-button="test()" text="1234">
        </card-button>
        <button-list title="功能">
            <button-list-item text="每日推荐" backgroundColor="#f4f45e" type="android-calendar">
            </button-list-item>
            <button-list-item text="私人FM" backgroundColor="rgb(50, 234, 137)" type="radio-waves">
            </button-list-item>
            <button-list-item text="导入歌单" backgroundColor="rgb(102, 102, 102)" type="log-in">
            </button-list-item>
            <button-list-item text="更多..." backgroundColor="rgb(36, 34, 45)" type="plus-round">
            </button-list-item>
        </button-list>
        <button-list title="Trending">
            <button-list-item text="歌手" backgroundColor="rgb(249, 98, 130)" type="person">
            </button-list-item>
            <button-list-item text="单曲" backgroundColor="rgb(20, 155, 195)" type="music-note" class="singleMusic">
            </button-list-item>
            <button-list-item text="专辑" backgroundColor="rgb(252, 125, 87)" type="disc" class="albumLogo">
            </button-list-item>
            <button-list-item text="更多..." backgroundColor="rgb(36, 34, 45)" type="more">
            </button-list-item>
        </button-list>
        <left-button size="20px" type="more" color="red"></left-button>
    </div>
</template>

<script>
    import cardButton from '../../components/common/cardButton/cardButton';
    import leftButton from '../../components/common/leftButton/leftButton';
    import buttonListItem from './buttonListItem';
    import buttonList from './buttonList';

    export default {
        name: 'index-page',
        components: { cardButton, buttonListItem, buttonList, leftButton },
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
</style>

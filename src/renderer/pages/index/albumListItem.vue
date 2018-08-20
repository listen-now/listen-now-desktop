<template>
    <div class="albumList-item" v-on:click="$emit('click-button')" v-bind:style="{backgroundColor: backgroundColor}">
        <div class="buttonList-avatar">
            <Icon v-bind:type="type" color="white"/>
        </div>
        <div class="buttonList-text">
            {{text}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "album-list-item",
        props:['text', 'backgroundColor', 'type']
    }
</script>

<style scoped>
    .albumList-item:hover {
        transform: scale(1.04);
        transition:all .2s ease-in-out;
        cursor: pointer;
    }
    .albumList-avatar {
        padding-top: 6px;
        width:100%;
        font-size:38px;
        text-align: center;
    }
    .albumList-item {
        width:85px;
        height:85px;
        float:left;
        margin-top:10px;
        margin-right:10px;
    }
    .albumList-item:nth-child(7n) {
        margin-right:0px;
    }
    .albumList-avatar>span {
        /*此处强行打补丁*/
        color:white !important;
    }
    .albumList-text {
        line-height: 20px;
        font-size: 14px;
        width:100%;
        text-align: center;
        color:white;
    }
</style>
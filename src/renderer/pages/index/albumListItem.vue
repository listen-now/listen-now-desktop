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
    .buttonList-item {
        height:45px;
    }
    .buttonList-item:hover {
        transform: scale(1.3);
        transition:all .2s ease-in-out;
        cursor: pointer;
    }
    .buttonList-avatar {
        padding-top: 6px;
        width:100%;
        font-size:38px;
        text-align: center;
    }
    .buttonList-item {
        width:120px;
        height:120px;
        float:left;
        margin-top:10px;
    }
    .buttonList-item:nth-child(2n) {
        margin-left:10px;
    }
    .buttonList-avatar>span {
        /*此处强行打补丁*/
        color:white !important;
    }
    .buttonList-text {
        line-height: 45px;
        font-size: 18px;
        width:100%;
        text-align: center;
        color:white;
    }
</style>